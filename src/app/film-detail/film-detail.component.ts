import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../classes/film';
import { Genere } from '../classes/genere';
import { AuthService } from '../services/auth.service';
import { VideotecaService } from '../services/videoteca.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  generi: Genere[] = [];
  tipo: any;
  film: Film = new Film();
  viewImage = false;

  constructor(
    private vService: VideotecaService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe(params => {
      if (params.id !== undefined) {
        this.vService.getFilm(+params.id).subscribe(
          (response: any) => {
            this.film = response.records[0];
          }
        );
      }
    });
    this.vService.getAllGenere().subscribe(
      (response: any) => {
        this.generi = response.records;
        this.tipo = this.generi.find(obj => obj.id === this.film.genere)?.tipo;
      }
    );
  }

  changeViewImage(): void{
    this.viewImage === true ? this.viewImage = false : this.viewImage = false;
  }

  isViewImage(): boolean{
    return this.viewImage;
  }

  deleteLocandina(): void{
    this.vService.deleteLocandina(this.film.id).subscribe(
      (response: any) => {
        console.log(response);
        this.film.locandina = '';
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  isLogin(): boolean{
    return this.authService.isLogin();
  }

  isAdmin(): boolean{
    return this.authService.isAdmin();
  }

  logout(): void{
    this.authService.logout();
    this.router.navigate(['/home/login']);
  }

}
