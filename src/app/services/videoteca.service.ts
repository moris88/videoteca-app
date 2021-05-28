import { IVideoteca } from './../interfaces/i-videoteca';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../classes/film';
import { UrlServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class VideotecaService implements IVideoteca {

  constructor(
    private http: HttpClient,
    private urlServerService: UrlServerService,
  ) {}

  // TUTTI GLI GENERI
  getAllGenere(): any {
    return this.http.get(this.urlServerService.getUrlFilm() + '/genere/0');
  }
  // UN GENERE DA ID
  getOneGenere(id: number): any {
    return this.http.get(this.urlServerService.getUrlFilm() + '/genere/' + id);
  }
  // TUTTI I FILM
  getFilms(): any {
    return this.http.get(this.urlServerService.getUrlFilm() + '/id=0');
  }
  // TUTTI I FILM PIU' RECENTI (NOVITA')
  getNovitaFilms(length: number): any {
    return this.http.get(this.urlServerService.getUrlFilm() + '/novita/' + length);
  }
  // UN FILM DA ID
  getFilm(id: number): any {
    return this.http.get(this.urlServerService.getUrlFilm() + '/id=' + id);
  }
  // CERCA FILM PER VALUTAZIONE
  getFilmByValutazione(valutazione: number): any {
    return this.http.get(this.urlServerService.getUrlFilm() + '/valutazione=' + valutazione);
  }
  // CERCA FILM PER TITOLO
  getFilmByTitolo(titolo: string): any {
    return this.http.get(this.urlServerService.getUrlFilm() + '/titolo=' + titolo);
  }
  // CERCA FILM PER ANNO
  getFilmByAnno(anno: string): any {
    return this.http.get(this.urlServerService.getUrlFilm() + '/anno=' + anno);
  }
  // CERCA FILM PER GENERE
  getFilmByGenere(genere: string): any {
    return this.http.get(this.urlServerService.getUrlFilm() + '/genere=' + genere);
  }
  // AGGIUNTA DI UN FILM
  addFilm(film: Film): any {
    return this.http.post(this.urlServerService.getUrlFilm() + '/create/0', film);
  }
  // AGGIUNTA DI UNA LOCANDINA
  addLocandina(file: any): any {
    return this.http.post(this.urlServerService.getUrlFilm() + '/locandina/0', file);
  }
  // RIMOZIONE DI UNA LOCANDINA DA ID FILM
  deleteLocandina(id: number): any {
    return this.http.delete(this.urlServerService.getUrlFilm() + '/locandina/' + id);
  }
  // AGGIORNAMENTO DEL FILM
  updateFilm(film: Film): any {
    return this.http.put(this.urlServerService.getUrlFilm() + '/update/' + film.id, film);
  }
  // RIMOZIONE DI UN FILM DA ID FILM
  deleteFilm(id: number): any {
    return this.http.delete(this.urlServerService.getUrlFilm() + '/delete/' + id);
  }
  // RIMOZIONE DI TUTTI I FILM
  deleteFilms(): any {
    return this.http.delete(this.urlServerService.getUrlFilm() + '/delete/0');
  }
}
