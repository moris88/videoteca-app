import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FilmsComponent } from './films/films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmAddComponent } from './film-add/film-add.component';
import { ErrorComponent } from './error/error.component';
import { OptionsComponent } from './options/options.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FilmDeleteComponent } from './film-delete/film-delete.component';
import { FilmUpdateComponent } from './film-update/film-update.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CommentiComponent } from './commenti/commenti.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    FilmsComponent,
    FilmDetailComponent,
    FilmAddComponent,
    ErrorComponent,
    OptionsComponent,
    FilmDeleteComponent,
    FilmUpdateComponent,
    SearchComponent,
    LoginComponent,
    RegisterComponent,
    CommentiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
