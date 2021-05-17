import { IUtente } from '../interfaces/i-utente';

export class Utente implements IUtente{
    id: string;
    nickname: string;
    email: string;
    pwd: string;
    account_id: string;
    data_insert: string;

    constructor(){
        this.id = '';
        this.nickname = '';
        this.email = '';
        this.pwd = '';
        this.account_id = '';
        this.data_insert = '';
    }
}
