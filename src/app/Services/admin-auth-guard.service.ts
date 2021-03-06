import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable()
export class AdminAuthGuard implements CanActivate{

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route, state){
    const user = this.authService.currentUser;
    if (this.authService.isLoggedIn() && user && user.isAdmin == 'true')
      return true;

    this.router.navigate(['/noaccess']);

  }

}
