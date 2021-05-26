import { Commento } from './../classes/commento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const IP_WEB_SERVER = 'http://192.168.1.208';
const URL_COMMENTI = '/web-server/api/videoteca/commenti';

@Injectable({
  providedIn: 'root'
})
export class CommentiService {

  allComment: Commento[] = [];

  constructor(private http: HttpClient) { }

  send(commento: Commento): void{
    // INVIO COMMENTO
    this.setCommento(commento).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      },
    );
  }

  update(): void{
    this.getCommenti().subscribe(
      (response: any) => {
        this.allComment = response.commenti;
      },
      (error: any) => {
        this.allComment = [];
        console.log(error);
      },
    );
  }

  private getCommenti(): any{
    return this.http.get(IP_WEB_SERVER + URL_COMMENTI);
  }

  private setCommento(commento: Commento): any{
    const temp = JSON.stringify(commento);
    return this.http.post(IP_WEB_SERVER + URL_COMMENTI, temp);
  }
}
