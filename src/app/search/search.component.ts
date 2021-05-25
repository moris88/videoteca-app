import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../classes/film';
import { Genere } from '../classes/genere';
import { VideotecaService } from '../services/videoteca.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  config: any;
  filmsSearch: Film[] = [];
  wordSearch!: any;
  viewSearch = false;
  private typeSearch = 1;
  generi!: Genere[];
  error = '';

  constructor(
    private vService: VideotecaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.vService.getAllGenere().subscribe(
      (response: any) => {
        this.generi = response.records;
      }
    );
    this.route.params.subscribe(params => {
      if (params.search !== undefined) {
        this.changeSearch(1);
        this.wordSearch = params.search;
        this.sendSearch();
      }
    });
  }

  changeSearch(choose: number): void{
    if (choose === 1 || choose === 2){
      this.wordSearch = undefined;
      this.error = '';
    }
    if (choose === 3 || choose === 4){
      this.wordSearch = '0';
      this.error = '';
    }
    this.typeSearch = choose;
  }

  chooseSearch(): number{
    return this.typeSearch;
  }

  resetSearch(): void{
    this.wordSearch = undefined;
    this.error = '';
    this.filmsSearch = [];
    this.viewSearch = false;
    this.changeSearch(this.chooseSearch());
  }

  optionConfig(response: any): void{
    this.filmsSearch = response;
    this.config = {
      itemsPerPage: 50,
      currentPage: 1,
      totalItems: this.filmsSearch.length
    };
  }

  sendSearch(): void{
    console.log('sono in send e cerco: ' + this.wordSearch);
    this.filmsSearch = [];
    if (this.wordSearch !== undefined) {
      this.viewSearch = true;
      switch (this.typeSearch){
        case 1:
          if (this.wordSearch.length <= 255){
            this.vService.getFilmByTitolo(this.wordSearch).subscribe(
              (response: any) => {
                this.optionConfig(response.records);
              }
            );
            this.error = '';
          }else{
            this.error = 'Titolo troppo lungo!';
            this.viewSearch = false;
          }
          break;
        case 2:
          // tslint:disable-next-line: radix
          const temp = parseInt(this.wordSearch);
          if (temp > 1900 && temp <= 2100 ){
            this.vService.getFilmByAnno(this.wordSearch).subscribe(
              (response: any) => {
                this.optionConfig(response.records);
              }
            );
            this.error = '';
          }else{
            this.error = 'L\'anno deve essere compreso tra 1900 e 2100!';
            this.viewSearch = false;
          }
          break;
        case 3:
          // tslint:disable-next-line: radix
          const temp2 = parseInt(this.wordSearch);
          if (temp2 > 0 && temp2 <= 5 ){
            this.vService.getFilmByValutazione(this.wordSearch).subscribe(
              (response: any) => {
                this.optionConfig(response.records);
              }
            );
            this.error = '';
          }else{
            this.error = 'Scelta errata, scegli una valutazione!';
            this.viewSearch = false;
          }
          break;
        case 4:
          // tslint:disable-next-line: radix
          const temp3 = parseInt(this.wordSearch);
          if (temp3 > 0 && temp3 <= 18 ){
            this.vService.getFilmByGenere(this.wordSearch).subscribe(
              (response: any) => {
                this.optionConfig(response.records);
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
    }
  }

  isEmpty(): boolean{
    if (this.filmsSearch === undefined) { return true; }
    if (this.filmsSearch.length === 0) { return true; }
    return false;
  }

  pageChanged(event: any): void{
    this.config.currentPage = event;
  }

  openURL(id: number): void{
    this.router.navigate(['/home/detail/' + id]);
  }
}
