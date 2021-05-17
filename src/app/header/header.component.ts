import { Attribute, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _title: string;
  searchTitle = '';
  loading = false;

  constructor(
    @Attribute('title') title: string,
    private router: Router,
    private vSearch: SearchService,
    private authService: AuthService,
    ) {
    this._title = title;
  }

  get title(): string{
    return this._title;
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
    if (this.authService.isLogin()){
      this.loading = false;
    }
  }

  cerca(): void{
    if (this.searchTitle !== ''){
      this.vSearch.write(this.searchTitle);
      this.router.navigate(['/home/search/' + this.searchTitle]);
    }else{
      window.alert('Inserisci un titolo per la ricerca!');
    }
  }

  logout(): void{
    this.loading = true;
    setTimeout(() => {
      this.authService.logout();
      this.loading = false;
    },3000);
  }
}
