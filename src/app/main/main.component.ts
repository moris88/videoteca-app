import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Film } from '../classes/film';
import { Genere } from '../classes/genere';
import { AuthService } from '../services/auth.service';
import { VideotecaService } from '../services/videoteca.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  mediaURL = './assets/image/';
  films: Film[] = [];
  generi!: Genere[];

  constructor(
    private vService: VideotecaService,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0);
    });
    this.vService.getNovitaFilms(6).subscribe(
      (response: any) => {
        this.films = response.records;
      }
    );
    this.vService.getAllGenere().subscribe(
      (response: any) => {
        this.generi = response.records;
      }
    );
    this.authService.checkSession();
  }

  isLogin(): boolean{
    return this.authService.isLogin();
  }

}
