import { IGenere } from "../interfaces/i-genere";

export class Genere implements IGenere{
    id: number;
    tipo: string;
    descrizione: string;

    constructor(){
        this.id = 0;
        this.tipo = '';
        this.descrizione = '';
    }
}
