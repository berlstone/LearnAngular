import { AuthService } from './auth.service';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';



@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private route: ActivatedRoute , private authService: AuthService) { }

  canActivate(route, state: RouterStateSnapshot){

    const url = state.url;

    if (this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login'], {queryParams: {returnUrl: url}});
    return false;
  }

}
