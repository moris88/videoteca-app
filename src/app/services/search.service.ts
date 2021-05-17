import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private search = '';
  constructor() { }

  read(): string{
    return this.search;
  }

  write(search: string): void{
    this.search = search;
  }
}
