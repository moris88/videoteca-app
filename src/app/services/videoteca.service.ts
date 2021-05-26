import { IVideoteca } from './../interfaces/i-videoteca';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../classes/film';

const IP_WEB_SERVER = 'http://192.168.1.208';
const URL_FILM = '/web-server/api/videoteca';
const URL_GENRE = '/web-server/api/videoteca/genere/';

@Injectable({
  providedIn: 'root'
})
export class VideotecaService implements IVideoteca {

  constructor(private http: HttpClient) {}

  // ++++++++++++++++++++++++++++ GENERE ++++++++++++++++++++++++++++++
  getAllGenere(): any {
    return this.http.get(IP_WEB_SERVER + URL_GENRE + '/0');
  }
  getOneGenere(id: number): any {
    return this.http.get(IP_WEB_SERVER + URL_GENRE + '/' + id);
  }

  // ++++++++++++++++++++++++++++ FILM ++++++++++++++++++++++++++++++
  getFilms(): any {
    return this.http.get(IP_WEB_SERVER + URL_FILM + '/id=0');
  }
  getNovitaFilms(length: number): any {
    return this.http.get(IP_WEB_SERVER + URL_FILM + '/novita/' + length);
  }
  getFilm(id: number): any {
    return this.http.get(IP_WEB_SERVER + URL_FILM + '/id=' + id);
  }
  getFilmByValutazione(valutazione: number): any {
    return this.http.get(IP_WEB_SERVER + URL_FILM + '/valutazione=' + valutazione);
  }
  getFilmByTitolo(titolo: string): any {
    return this.http.get(IP_WEB_SERVER + URL_FILM + '/titolo=' + titolo);
  }
  getFilmByAnno(anno: string): any {
    return this.http.get(IP_WEB_SERVER + URL_FILM + '/anno=' + anno);
  }
  getFilmByGenere(genere: string): any {
    return this.http.get(IP_WEB_SERVER + URL_FILM + '/genere=' + genere);
  }
  addFilm(film: Film): any {
    return this.http.post(IP_WEB_SERVER + URL_FILM + '/create/0', film);
  }
  addLocandina(file: any): any {
    return this.http.post(IP_WEB_SERVER + URL_FILM + '/locandina/0', file);
  }
  deleteLocandina(id: number): any {
    return this.http.delete(IP_WEB_SERVER + URL_FILM + '/locandina/' + id);
  }
  updateFilm(film: Film): any {
    return this.http.put(IP_WEB_SERVER + URL_FILM + '/update/' + film.id, film);
  }
  deleteFilm(id: number): any {
    return this.http.delete(IP_WEB_SERVER + URL_FILM + '/delete/' + id);
  }
  deleteFilms(): any {
    return this.http.delete(IP_WEB_SERVER + URL_FILM + '/delete/0');
  }
}
