import { Utente } from './../classes/utente';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UtentiService } from '../services/utenti.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  utenti: Utente[] = [];
  modifyUtente = new Utente();
  removeUtente = new Utente();
  account = '';
  loading = false;

  email = '';
  nickname = '';
  pwd = '';

  constructor(
    private authService: AuthService,
    private utentiService: UtentiService,
  ) { }

  get current(): Utente{
    return this.authService.utente;
  }

  ngOnInit(): void {
    this.updateUtenti();
  }

  updateUtenti(): void{
    this.utentiService.getUtenti().subscribe(
      (response: any) => {
        this.utenti = response.records;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  sendEmail(): void{
    this.loading = true;
    this.utentiService.sendFilmUtente().subscribe(
      (response: any) => {
        console.log(response);
        window.alert(response.message);
        this.loading = false;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  isEmpty(): boolean{
    if ((this.utenti.length - 1) > 0){
      return false;
    }else{
      return true;
    }
  }

  isAdmin(): boolean{
    return this.authService.isAdmin();
  }

  changeMyEmail(): void{
    if (this.isValidEmail() === true){
      if (window.confirm('Confermi? ' + this.email)){
        this.authService.utente.email = this.email;
        this.utentiService.updateUtente(this.authService.utente).subscribe(
          (response: any) => {
            window.alert(response.message);
          },
          (error: any) => {
            window.alert(error.message);
          },
        );
      }
    }else{
      window.alert('Email non corretta!');
    }
    this.email = '';
  }

  changeMyNickname(): void{
    if (this.isValidNickname() === true){
      if (window.confirm('Confermi? ' + this.nickname)){
        this.authService.utente.nickname = this.nickname;
        this.utentiService.updateUtente(this.authService.utente).subscribe(
          (response: any) => {
            window.alert(response.message);
          },
          (error: any) => {
            window.alert(error.message);
          },
        );
      }
    }else{
      window.alert('Nickname non corretto! Sono consentiti solo caratteri minuscoli e numeri');
    }
    this.nickname = '';
  }

  changeMyPassword(): void{
    if (this.isValidPwd() === true){
      if (window.confirm('Confermi? ' + this.pwd)){
        this.authService.utente.pwd = this.pwd;
        this.utentiService.updateUtente(this.authService.utente).subscribe(
          (response: any) => {
            window.alert(response.message);
          },
          (error: any) => {
            window.alert(error.message);
          },
        );
      }
    }else{
      window.alert('Password non corretta!');
    }
    this.pwd = '';
  }

  setModifyUtente(utente: Utente): void{
    this.modifyUtente = Object.assign( {}, utente);
  }

  setRemoveUtente(utente: Utente): void{
    this.removeUtente = Object.assign( {}, utente);
  }

  deleteMyAccount(): void{
    this.utentiService.deleteUtente(this.authService.utente.id).subscribe(
      (response: any) => {
        window.alert(response.message);
        this.authService.logout();
      },
      (error: any) => {
        window.alert(error.error.message);
        this.authService.logout();
      },
    );
  }

  changeAccount(utente: Utente, account_type: string): void{
    utente.account_id = account_type;
    console.log(utente);
    if (window.confirm('Confermi il cambio di account all\'utente '+utente.nickname+'?')){
      this.utentiService.updateUtente(utente).subscribe(
        (response: any) => {
          console.log(response);
        },
        (error: any) => {
          console.log(error);
        },
      );
    }
  }

  deleteAccount(id: string): void{
    if (window.confirm('Sei sicuro di eliminare questo account?')){
      this.utentiService.deleteUtente(id).subscribe(
        (response: any) => {
          this.updateUtenti();
          window.alert(response.message);
        },
        (error: any) => {
          window.alert(error.message);
        },
      );
    }
  }

  private isValidPwd(): boolean {
    const minNumberofChars = 6;
    const maxNumberofChars = 14;
    const regularExpression  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!@#$%^&*_-])([a-zA-Z0-9?!@#$%^&*_-]{6,14})$/;
    if (this.pwd.length < minNumberofChars || this.pwd.length > maxNumberofChars){
        return false;
    }
    if (!regularExpression.test(this.pwd)) {
        return false;
    }
    if (this.isVoid(this.pwd)){
      return false;
    }
    return true;
  }

  private isValidEmail(): boolean{
    const minNumberofChars = 6;
    const maxNumberofChars = 255;
    const regularExpression = /^([a-z0-9_.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (this.email.length < minNumberofChars || this.email.length > maxNumberofChars){
      return false;
    }
    if (!regularExpression.test(this.email)) {
      return false;
    }
    if (this.isVoid(this.email)){
      return false;
    }
    return true;
  }

  private isValidNickname(): boolean{
    const minNumberofChars = 3;
    const maxNumberofChars = 255;
    const regularExpression = /^([a-z0-9]+)$/;
    if (this.nickname.length < minNumberofChars || this.nickname.length > maxNumberofChars){
      return false;
    }
    if (!regularExpression.test(this.nickname)) {
      return false;
    }
    if (this.isVoid(this.nickname)){
      return false;
    }
    return true;
  }

  private isVoid(text: String): boolean{
    if (text.length === 0 || text === null || text === undefined || text === ''){
      return true;
    }
    return false;
  }
}
