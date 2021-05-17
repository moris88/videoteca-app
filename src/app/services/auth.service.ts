import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '../classes/token';
import { Utente } from '../classes/utente';
import { UtentiService } from './utenti.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  error = false;
  utente = new Utente();
  private token = new Token();
  private adminFlag = false;
  private loginFlag = false;

  constructor(
    private router: Router,
    private utentiService: UtentiService
  ) {}

  isLogin(): boolean{
    return this.loginFlag;
  }

  isAdmin(): boolean{
    return this.adminFlag;
  }

  setLogin(value: boolean): void{
    this.loginFlag = value;
    if (value === false){
      this.adminFlag = false;
      this.token.deleteValue();
      this.utente = new Utente();
    }
  }

  setToken(email: string, pwd: string): void{
    this.token.saveValue(email, pwd);
  }

  getToken(): void {
    this.utente.email = this.token.loadEmail();
    this.utente.pwd = this.token.loadEmail();
  }

  abilitaAdmin(): void{
    this.adminFlag = true;
  }

  checkSession(): void{
    if (this.token.loadEmail() !== '' && this.token.loadPwd() !== ''){
      this.login(this.token.loadEmail(), this.token.loadPwd());
    }
  }

  login(email: string, pwd: string): void{
    this.utente.email = email;
    this.utente.pwd = pwd;
    this.utentiService.loginUtente(this.utente).subscribe(
      (response: any) => {
        this.setLogin(true);
        this.utente.id = response.id;
        this.utente.nickname = response.nickname;
        this.utente.account_id = response.account_id;
        if (this.utente.account_id === '1') {this.abilitaAdmin(); }
        this.utente.data_insert = response.data_insert;
        this.setToken(email, pwd);
        this.error = false;
      },
      (error: any) => {
        console.log(error);
        this.error = true;
      },
    );
  }

  logout(): void{
    this.token.deleteValue();
    this.setLogin(false);
    this.router.navigate(['/home']);
  }

  register(email: string, pwd: string): void{
    this.utente.email = email;
    this.utente.pwd = pwd;
    this.utentiService.registerUtente(this.utente).subscribe(
      (response: any) => {
        console.log(response);
        this.error = false;
      },
      (error: any) => {
        console.log(error);
        this.error = true;
      },
    );
  }
}
