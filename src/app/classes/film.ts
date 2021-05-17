import { IFilm } from '../interfaces/i-film';

export class Film implements IFilm{

    id: number;
    titolo: string;
    genere: number;
    anno: string;
    valutazione: number;
    trama: string;
    posizione: string;
    locandina: string;
    trailer: string;
    durata: string;
    // tslint:disable-next-line: variable-name
    data_insert: string;

    constructor(){
        this.id = 0;
        this.titolo = '';
        this.genere = 0;
        this.anno = '';
        this.valutazione = 0;
        this.trama = '';
        this.posizione = '';
        this.locandina = '';
        this.trailer = '';
        this.durata = '';
        this.data_insert = '';
    }

}
