import { ErrorComponent } from './error/error.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmAddComponent } from './film-add/film-add.component';
import { FilmsComponent } from './films/films.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OptionsComponent } from './options/options.component';
import { FilmDeleteComponent } from './film-delete/film-delete.component';
import { FilmUpdateComponent } from './film-update/film-update.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminGuardService } from './services/admin-guard.service';
import { UserGuardService } from './services/user-guard.service';
import { ForgetComponent } from './forget/forget.component';

const routes: Routes = [
  { path: 'home', component: MainComponent},
  { path: 'home/login', component: LoginComponent},
  { path: 'home/forget', component: ForgetComponent},
  { path: 'home/register', component: RegisterComponent},
  { path: 'home/search', component: SearchComponent},
  { path: 'home/search/:search', component: SearchComponent},
  { path: 'home/films', component: FilmsComponent },
  { path: 'home/add', component: FilmAddComponent, canActivate: [AdminGuardService] },
  { path: 'home/edit/:id', component: FilmUpdateComponent, canActivate: [AdminGuardService] },
  { path: 'home/detail/:id', component: FilmDetailComponent },
  { path: 'home/delete/:id', component: FilmDeleteComponent, canActivate: [AdminGuardService] },
  { path: 'admin/options', component: OptionsComponent, canActivate: [AdminGuardService] },
  { path: 'user/options', component: OptionsComponent, canActivate: [UserGuardService] },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
