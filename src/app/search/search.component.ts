import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../classes/film';
import { Genere } from '../classes/genere';
import { SearchService } from '../services/search.service';
import { VideotecaService } from '../services/videoteca.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  filmsSearch: Film[] = [];
  wordSearch!: any;
  viewSearch = false;
  private search = 1;
  generi!: Genere[];
  error = '';

  constructor(
    private vService: VideotecaService,
    private router: Router,
    private route: ActivatedRoute,
    private vSearch: SearchService,
  ) { }

  ngOnInit(): void {
    this.vService.getAllGenere().subscribe(
      (response: any) => {
        this.generi = response.records;
      }
    );
    // tslint:disable-next-line: deprecation
    this.route.params.subscribe(params => {
      if (params.search !== undefined) {
        this.wordSearch = this.vSearch.read();
        this.changeSearch(1);
        this.sendSearch();
      }
    });
  }

  changeSearch(choose: number): void{
    if (choose === 1 || choose === 2){ 
      this.wordSearch = undefined; 
      this.error='';
    }
    if (choose === 3 || choose === 4){ 
      this.wordSearch = '0'; 
      this.error='';
    }
    this.search = choose;
  }

  chooseSearch(): number{
    return this.search;
  }

  sendSearch(): void{
    this.filmsSearch = [];
    if (this.wordSearch !== undefined) {
      this.viewSearch = true;
      switch (this.search){
        case 1:
          if (this.wordSearch.length <= 255){
            this.vService.getFilmByTitolo(this.wordSearch).subscribe(
              (response: any) => {
                this.filmsSearch = response.records;
              }
            );
            this.error = '';
          }else{
            this.error = 'Titolo troppo lungo!';
            this.viewSearch = false;
          }
          break;
        case 2:
          const temp = parseInt(this.wordSearch);
          if (temp > 1900 && temp <= 2100 ){
            this.vService.getFilmByAnno(this.wordSearch).subscribe(
              (response: any) => {
                this.filmsSearch = response.records;
              }
            );
            this.error = '';
          }else{
            this.error = 'L\'anno deve essere compreso tra 1900 e 2100!';
            this.viewSearch = false;
          }
          break;
        case 3:
          const temp2 = parseInt(this.wordSearch);
          if (temp2 > 0 && temp2 <= 5 ){
            this.vService.getFilmByValutazione(this.wordSearch).subscribe(
              (response: any) => {
                this.filmsSearch = response.records;
              }
            );
            this.error = '';
          }else{
            this.error = 'Scelta errata, scegli una valutazione!';
            this.viewSearch = false;
          }
          break;
        case 4:
          const temp3 = parseInt(this.wordSearch);
          if (temp3 > 0 && temp3 <= 18 ){
            this.vService.getFilmByGenere(this.wordSearch).subscribe(
              (response: any) => {
                this.filmsSearch = response.records;
              }
            );
            this.error = '';
          }else{
            this.error = 'Scelta errata, scegli un genere!';
            this.viewSearch = false;
          }
          break;
        default:
          break;
      }
    }else{
      this.viewSearch = false;
      this.wordSearch = undefined;
    }
  }

  openURL(id: number): void{
    this.router.navigate(['/home/detail/' + id]);
  }
}
