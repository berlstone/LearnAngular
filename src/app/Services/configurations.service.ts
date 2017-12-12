import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class ConfigurationsService {

  constructor() { }

      public static readonly appVersion: string = '1.0.0';

      public baseUrl: string = ConfigurationsService.baseUrl().replace(/\/$/, '');
      public fallbackBaseUrl = '';
      public loginUrl = '/Login';
      public apiUrl = 'http://localhost:10222/api';


    //***Specify default configurations here***
    public static readonly defaultLanguage: string = 'en';
    public static readonly defaultHomeUrl: string = '/';
    public static readonly defaultTheme: string = 'Default';
    public static readonly defaultShowDashboardStatistics: boolean = true;
    public static readonly defaultShowDashboardNotifications: boolean = true;
    public static readonly defaultShowDashboardTodo: boolean = false;
    public static readonly defaultShowDashboardBanner: boolean = true;
    //***End of defaults***

    public static baseUrl() {
      if (window.location.origin)
          return window.location.origin;

      return window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  }


}
