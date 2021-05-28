import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../classes/utente';
import { UrlServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(
    private httpClient: HttpClient,
    private urlServerService: UrlServerService,
  ) {}

  // INVIA NEWSLETTER A TUTTE LE EMAIL SALVATE SUL SERVER
  sendFilmUtente(): any{
    return this.httpClient.post(this.urlServerService.getUrlUtenti() + '/action=email', null);
  }
  // ELIMINA UN UTENTE IN BASE ALL'ID (ID = DATA)
  deleteUtente(id: string): any{
    return this.httpClient.delete(this.urlServerService.getUrlUtenti() + '/action=' + id);
  }
  // ELIMINA TUTTI GLI UTENTI DI TIPO USER
  deleteUtentiUser(): any{
    return this.httpClient.delete(this.urlServerService.getUrlUtenti() + '/action=0');
  }
  // AGGIORNA UN UTENTE
  updateUtente(utente: Utente): any{
    const temp = JSON.stringify(utente);
    return this.httpClient.put(this.urlServerService.getUrlUtenti() + '/action=update', temp);
  }
  // RESISTRAZIONE DI UN NUOVO UTENTE
  registerUtente(utente: Utente): any{
    const temp = JSON.stringify(utente);
    return this.httpClient.post(this.urlServerService.getUrlUtenti() + '/action=register', temp);
  }
  // VERIFICA DEL LOGIN DELL'UTENTE
  loginUtente(utente: Utente): any{
    const temp = JSON.stringify(utente);
    return this.httpClient.post(this.urlServerService.getUrlUtenti() + '/action=login', temp);
  }
  // RESTITUZIONE DI UN UTENTE DA ID
  getUtenteByID(id: number): any{
    return this.httpClient.get(this.urlServerService.getUrlUtenti() + '/action=' + id);
  }
  // RESTITUZIONE DI TUTTI GLI UTENTI
  getUtenti(): any{
    return this.httpClient.get(this.urlServerService.getUrlUtenti() + '/action=0');
  }
}
