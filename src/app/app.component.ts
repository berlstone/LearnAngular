import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular 4 App';
  navbarColor: string = environment.navbarColor;

  constructor(public authService: AuthService, private route: Router){
  }

  logout(){
    this.authService.logout();
    alert('User is logged out successfully!');
    this.route.navigate(['/login']);
  }

}
