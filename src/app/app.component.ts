import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular 4 App';

  constructor(public authService:AuthService, private route:Router){
  }

  logout(){
    this.authService.logout();
    alert('User is logged out successfully!')
    this.route.navigate(["/login"]);
  } 

}
