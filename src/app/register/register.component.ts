import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // newEmail = 'asd@asd.it';
  // newPwd = 'Asdasd@00';
  // pwdConfirm = 'Asdasd@00';
  newEmail = '';
  newPwd = '';
  pwdConfirm = '';
  message = '';
  error = false;
  loading = false;
  success = false;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.error = false;
    this.success = false;
  }

  registrati(): void{
    this.error = false;
    this.message = '';
    if (this.newPwd !== this.pwdConfirm){
      this.error = true;
      this.message = 'Le password non coincidono!';
    }else{
      if (this.isValidEmail()){
        if (this.isValidPwd()){
          this.loading = true;
          this.authService.register(this.newEmail, this.newPwd);
          setTimeout(() => {
            console.log(this.authService.error);
            if (this.authService.error === false){
              this.success = true;
              this.newEmail = '';
              this.newPwd = '';
              this.pwdConfirm = '';
              this.error = false;
              this.loading = false;
            }else{
              this.error = true;
              this.message = 'Errore! Email già presente!';
              this.loading = false;
            }
          }, 3000);
        }
        else{
          this.error = true;
          this.newPwd = '';
          this.pwdConfirm = '';
          this.message = 'La password non è corretta! Deve essere lunga almeno 6 caratteri e massimo 14, inoltre deve contenere almeno una lettera Maiuscola, una minuscola, un numero e un carattere speciale tra: ?!@#$%^&*_-';
        }
      }else{
        this.error = true;
        this.message = 'L\'email non è corretta! Es. nome@dominio.com\'';
      }
    }
  }

  private isValidPwd(): boolean {
    const minNumberofChars = 6;
    const maxNumberofChars = 14;
    const regularExpression  = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!@#$%^&*_-])([a-zA-Z0-9?!@#$%^&*_-]{6,14})$/;
    if (this.newPwd.length < minNumberofChars || this.newPwd.length > maxNumberofChars){
        return false;
    }
    if (!regularExpression.test(this.newPwd)) {
        return false;
    }
    return true;
  }

  private isValidEmail(): boolean{
    const regularExpression = /^([a-z0-9_.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (!regularExpression.test(this.newEmail)) {
      return false;
    }
    return true;
  }
}
