import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent implements OnInit {

  email = '';
  errorForget = false;
  errorString = ''; 
  successForget = false;
  successString = ''; 
  loading = false;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  invia(): void{
    this.errorString = '';
    this.errorForget = false;
    this.successString = '';
    this.successForget = false;
    if (this.email !== ''){
      this.loading = true;
      this.authService.forget(this.email);
      setTimeout(() => {
        if (this.authService.error === false){
          this.successString = 'Email inviata! Controlla la tua posta elettronica.';
          this.successForget = true;
          this.loading = false;
        }else {
          this.errorString = 'Email non inviata! Nessun utente registrato.';
          this.errorForget = true;
          this.loading = false;
        }
      }, 3000);
    }
  }
}
