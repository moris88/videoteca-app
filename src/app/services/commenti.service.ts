import { Commento } from './../classes/commento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlServerService } from './server.service';

@Injectable({
  providedIn: 'root'
})
export class CommentiService {

  allComment: Commento[] = [];

  constructor(
    private http: HttpClient,
    private urlServerService: UrlServerService,
  ) { }

  send(commento: Commento): void{
    // INVIO COMMENTO
    this.setCommento(commento).subscribe(
      (response: any) => {
        console.log('commento inviato');
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
    return this.http.get(this.urlServerService.getUrlCommenti());
  }

  private setCommento(commento: Commento): any{
    console.log(this.urlServerService.getUrlCommenti());
    const temp = JSON.stringify(commento);
    return this.http.post(this.urlServerService.getUrlCommenti(), temp);
  }
}
