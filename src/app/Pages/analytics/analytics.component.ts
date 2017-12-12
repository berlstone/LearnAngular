import { ConfigurationsService } from './../../Services/configurations.service';
import { AuthHttp } from 'angular2-jwt';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private _authService: AuthService, private _config: ConfigurationsService) { }

  ngOnInit() {
  }
  webdata= '<empty>';
  webdatauth = '<empty>';

  getData = () => {
    this._authService.getAuthenticatedData()
    .subscribe(res => {
      this.webdata = res.json();
    }, error => {
      this.webdata = error;
    });
  }
  getDataAuth(){
    this._authService.getAuthData()
    .subscribe(
      res => {
        this.webdatauth = res.json();
      },
      err => {
        this.webdatauth = err.json();
      }
    );
  }
}
