import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlServerService {

  private ipWebServer = '192.168.1.208';
  private urlUtenti = '/web-server/api/utenti';
  private urlFilm = '/web-server/api/videoteca';
  private urlCommenti = '/web-server/api/commenti';

  constructor() { }

  getUrlIPServer(): string{
    return 'http://' + this.ipWebServer;
  }

  getUrlFilm(): string{
    return 'http://' + this.ipWebServer + this.urlFilm;
  }

  getUrlUtenti(): string{
    return 'http://' + this.ipWebServer + this.urlUtenti;
  }

  getUrlCommenti(): string{
    return 'http://' + this.ipWebServer + this.urlCommenti;
  }
}
