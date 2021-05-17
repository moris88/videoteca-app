import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideotecaService } from '../services/videoteca.service';

@Component({
  selector: 'app-film-delete',
  templateUrl: './film-delete.component.html',
  styleUrls: ['./film-delete.component.css']
})
export class FilmDeleteComponent implements OnInit {

  message!: string;
  error = false;

  constructor(
    private vService: VideotecaService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe(params => {
      if (params.id !== undefined) {
        if (params.id === 0){
          this.vService.deleteFilms().subscribe(
            (response: any) => {
              this.message = response.message;
              this.error = true;
            },
            (error: any) => {
              this.error = false;
              this.message = error.error.message;
            }
          );
        }else{
          this.vService.deleteFilm(+params.id).subscribe(
            (response: any) => {
              this.message = response.message;
              this.error = true;
            },
            (error: any) => {
              this.error = true;
              this.message = error.error.message;
            }
          );
        }
      }
    });
  }
}
