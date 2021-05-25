import { Component, OnInit } from '@angular/core';
import { Film } from '../classes/film';
import { Genere } from '../classes/genere';
import { VideotecaService } from '../services/videoteca.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  config: any;

  films: Film[] = [];
  generi!: Genere[];
  deleteFilm: Film = new Film();

  constructor(
    private vService: VideotecaService,
  ) { }

  ngOnInit(): void {
    this.vService.getFilms().subscribe(
      (response: any) => {
        this.films = response.records;
        this.config = {
          itemsPerPage: 20,
          currentPage: 1,
          totalItems: this.films.length
        };
      }
    );
  }

  isEmpty(): boolean{
    if (this.films === undefined) { return true; }
    if (this.films.length === 0) { return true; }
    return false;
  }

  filmDelete(film: Film): void{
    this.deleteFilm = film;
  }

  pageChanged(event: any): void{
    this.config.currentPage = event;
  }
}
