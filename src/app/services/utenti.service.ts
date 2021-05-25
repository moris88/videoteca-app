import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../classes/utente';

const IP_WEB_SERVER = 'http://192.168.1.184';
const URL_UTENTI = '/web-server/api/videoteca/utenti';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(
    private httpClient: HttpClient
  ) {}

  sendFilmUtente(): any{
    return this.httpClient.post(IP_WEB_SERVER + URL_UTENTI + '/action=email', null);
  }
  deleteUtente(id: string): any{
    return this.httpClient.delete(IP_WEB_SERVER + URL_UTENTI + '/action=' + id);
  }
  deleteUtentiUser(): any{
    return this.httpClient.delete(IP_WEB_SERVER + URL_UTENTI + '/action=0');
  }
  updateUtente(utente: Utente): any{
    const temp = JSON.stringify(utente);
    return this.httpClient.put(IP_WEB_SERVER + URL_UTENTI + '/action=update', temp);
  }
  registerUtente(utente: Utente): any{
    const temp = JSON.stringify(utente);
    return this.httpClient.post(IP_WEB_SERVER + URL_UTENTI + '/action=register', temp);
  }
  loginUtente(utente: Utente): any{
    const temp = JSON.stringify(utente);
    return this.httpClient.post(IP_WEB_SERVER + URL_UTENTI + '/action=login', temp);
  }
  getUtenteByID(id: number): any{
    return this.httpClient.get(IP_WEB_SERVER + URL_UTENTI + '/action=' + id);
  }
  getUtenti(): any{
    return this.httpClient.get(IP_WEB_SERVER + URL_UTENTI + '/action=0');
  }
}
