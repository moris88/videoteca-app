import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Utente } from '../classes/utente';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email = 'tolomeo.maurizio@outlook.it';
  pwd = 'Cecilia1992@';
  // email = '';
  // pwd = '';
  loading = false;
  errorLogin = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.authService.checkSession();
    if (this.authService.isLogin()){
      this.loading = false;
    }
  }

  isLogin(): boolean{
    return this.authService.isLogin();
  }

  accedi(): void{
    this.errorLogin = false;
    this.loading = true;
    this.authService.login(this.email, this.pwd);
    setTimeout(() => {
      if (this.authService.isLogin()){
        this.router.navigate(['/home']);
      }else{
        this.loading = false;
        this.errorLogin = true;
      }
    }, 3000);
  }
}
