import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../classes/film';
import { Genere } from '../classes/genere';
import { VideotecaService } from '../services/videoteca.service';

@Component({
  selector: 'app-film-update',
  templateUrl: './film-update.component.html',
  styleUrls: ['./film-update.component.css']
})
export class FilmUpdateComponent implements OnInit {

  generi: Genere[] = [];
  modifyFilm: Film = new Film();
  resetFilm: Film = new Film();
  file!: FormData;
  errors: string[] = [];
  @ViewChild('file', {static: false})
  InputVar!: ElementRef;

  constructor(
    private vService: VideotecaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe(params => {
      if (params.id !== undefined) {
        this.vService.getFilm(+params.id).subscribe(
          (response: any) => {
            this.modifyFilm = response.records[0];
            this.resetFilm = Object.assign({}, response.records[0]);
          }
        );
      }
    });

    this.vService.getAllGenere().subscribe(
      (response: any) => {
        this.generi = response.records;
      }
    );
  }

  reset(): void{
    this.modifyFilm = Object.assign({}, this.resetFilm);
  }

  prepareData(file: File): void{
    this.file = new FormData();
    this.file.append('file', file);
  }

  deleteData(): void{
    this.InputVar.nativeElement.value = '';
  }

  update(file: HTMLInputElement|any): void {
    this.prepareData(file.files[0]);
    if (file.files[0] !== undefined){
      this.modifyFilm.locandina = file.files[0].name;
    }
    this.errors = [];
    if (this.modifyFilm.titolo.length <= 0 && this.modifyFilm.titolo === ''){
      this.errors.push('Inserire un titolo! Minimo dei caratteri è 3');
    }
    if (this.modifyFilm.genere <= 0){
      this.errors.push('Inserire un genere!');
    }
    if (this.errors.length <= 0){
      this.vService.updateFilm(this.modifyFilm).subscribe(
        (response: any) => {
          alert(response.message);
          if (file.files[0] !== undefined){
            this.vService.addLocandina(this.file).subscribe(
              (response2: any) => {
                alert(response2.message);
                this.router.navigate(['/home/films']);
              },
              (error: any) => {
                alert(error.error.message);
              },
            );
          }else{
            this.router.navigate(['/home/films']);
          }
        },
        (error: any) => {
          alert(error.message);
        },
      );
    }
  }
}
