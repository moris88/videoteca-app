import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if (this.authService.isLogin() && this.authService.isAdmin()) {
        return true;
      }
      if (this.authService.isLogin() && !this.authService.isAdmin()){
        window.alert('Devi loggarti come admin per visualizzare questa pagina');
        this.router.navigate(['/home']);
        return false;
      }
      else{
        window.alert('Devi loggarti per visualizzare questa pagina');
        this.router.navigate(['/home']);
        return false;
      }
  }
}
