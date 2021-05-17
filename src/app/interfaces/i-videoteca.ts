import { Film } from '../classes/film';

export interface IVideoteca {

    getFilms(): any;
    getFilm(id: number): any;
    addFilm(film: Film): any;
    updateFilm(film: Film): any;
    deleteFilm(id: number): any;
    deleteFilms(): any;
}
