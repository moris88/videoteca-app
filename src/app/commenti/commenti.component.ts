import { CommentiService } from './../services/commenti.service';
import { Attribute, Component, OnInit } from '@angular/core';
import { Commento } from '../classes/commento';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-commenti',
  templateUrl: './commenti.component.html',
  styleUrls: ['./commenti.component.css']
})
export class CommentiComponent implements OnInit {

  myComment = new Commento();
  view = false; 

  constructor(
    private authService: AuthService,
    private commentiService: CommentiService,
    @Attribute('view') text: string,
  ) { 
    text === 'true' ? this.view = true : this.view = false;
  }

  ngOnInit(): void {
    this.commentiService.update();
    setInterval(() => this.commentiService.update(), 10000);
  }

  get allComment(): any{
    return this.commentiService.allComment;
  }

  isEmptyComment(): boolean{
    return this.commentiService.allComment.length !== 0;
  }

  get myNickname(): string{
    return this.authService.utente.nickname;
  }

  inviaCommento(): void{
    if (this.myComment.commento !== ''){
      this.myComment.utente = this.authService.utente.id;
      this.commentiService.send(this.myComment);
      this.myComment.commento = '';
      setTimeout(() => this.commentiService.update(), 1000);
    }
  }
}

