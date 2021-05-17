import { ICommento } from '../interfaces/i-commento';

export class Commento implements ICommento{
    id: string;
    utente: string;
    commento: string;

    constructor(){
        this.id = '';
        this.utente = '';
        this.commento = '';
    }
}
