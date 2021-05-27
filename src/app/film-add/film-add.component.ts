import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../classes/film';
import { Genere } from '../classes/genere';
import { VideotecaService } from '../services/videoteca.service';

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.css']
})
export class FilmAddComponent implements OnInit {

  generi: Genere[] = [];
  film: Film = new Film();
  fileLocandina!: FormData;
  errors: string[] = [];
  @ViewChild('file', {static: false})
  InputVar!: ElementRef;

  constructor(
    private vService: VideotecaService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.vService.getAllGenere().subscribe(
      (response: any) => {
        this.generi = response.records;
      }
    );
  }

  reset(): void{
    this.film = new Film();
    this.deleteDataLocandina();
  }

  prepareDataLocandina(file: File): void{
    this.fileLocandina = new FormData();
    this.fileLocandina.append('file', file);
  }

  deleteDataLocandina(): void{
    this.InputVar.nativeElement.value = '';
  }

  save(fileTempLocandina: HTMLInputElement|any): void {
    this.prepareDataLocandina(fileTempLocandina.files[0]);
    if (fileTempLocandina.files[0] !== undefined){
      this.film.locandina = fileTempLocandina.files[0].name;
    }
    this.errors = [];
    if (this.film.titolo.length <= 0 && this.film.titolo === ''){
      this.errors.push('Inserire un titolo! Minimo dei caratteri è 3');
    }
    if (this.film.genere <= 0){
      this.errors.push('Inserire un genere!');
    }
    if (this.errors.length <= 0){
      this.vService.addFilm(this.film).subscribe(
        (response: any) => {
          alert(response.message);
          if (fileTempLocandina.files[0] !== undefined){
            this.vService.addLocandina(this.fileLocandina).subscribe(
              (response2: any) => {
                alert(response2.message);
                this.router.navigate(['/home/films']);
              },
              (error2: any) => {
                alert('ERRORE! ' + error2.error.message);
              },
            );
          }
          else{
            this.router.navigate(['/home/films']);
          }
        },
        (error: any) => {
          alert('ERRORE! ' + error.error.message);
        },
      );
    }
  }
}
