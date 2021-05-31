import { Attribute, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private textTitle: string;
  searchTitle = '';

  constructor(
    @Attribute('title') title: string,
    private router: Router,
    private authService: AuthService,
    ) {
    this.textTitle = title;
  }

  get title(): string{
    return this.textTitle;
  }

  isLogin(): boolean{
    return this.authService.isLogin();
  }

  isAdmin(): boolean{
    return this.authService.isAdmin();
  }

  loadName(): string{
    return this.authService.utente.nickname;
  }

  ngOnInit(): void {
    this.authService.checkSession();
  }

  cerca(): void{
    if (this.searchTitle !== ''){
      this.router.navigate(['/home/search/' + this.searchTitle]);
      this.searchTitle = '';
    }else{
      this.router.navigate(['/home/search']);
    }
  }

  logout(): void{
    this.authService.logout();
  }
}
