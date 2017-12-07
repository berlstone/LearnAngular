import { AdminAuthGuard } from './Services/admin-auth-guard.service';
import { AuthGuard } from './Services/auth-guard.service';
import { CanActivate } from '@angular/router/src/interfaces';

import { GithubJobsService } from './Services/github-jobs.service';
import { GithubJobsComponent } from './Pages/github-jobs/github-jobs.component';
import { AboutusComponent } from './Pages/aboutus/aboutus.component';

import { ErrorHandler } from '@angular/core';
import { GlobalErrorhandler } from './common/global-error-handler';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CourseService } from './Services/course.service';
import { JSONData } from './sample.data';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BlogService } from './Services/blog.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router,RouterModule} from "@angular/router"
import { HttpModule } from "@angular/http"
import { AppComponent } from './app.component';
import { CourseComponent } from './Pages/course/course.component';
import { SummaryPipe } from './Directives/summary.pipe';
import { SentencecasePipe } from './Directives/sentencecase.pipe';
import { PanelComponent } from './Components/panel/panel.component';
import { LikeComponent } from './Components/like/like.component';
import { InputFormatDirective } from './Directives/input-format.directive';
import { ZippyComponent } from './Components/zippy/zippy.component';
import { ContactFormComponent } from './Pages/contact-form/contact-form.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

import { DashboardComponent } from './Pages/dashboard/dashboard.component';

import { AnalyticsComponent } from './Pages/analytics/analytics.component';
import { NotfoundComponent } from './Pages/notfound/notfound.component';
import { ReportsComponent } from './Pages/reports/reports.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { RatingComponent } from './components/rating/rating.component';
import { ViewpostComponent } from './pages/viewpost/viewpost.component';
import { AuthService } from './Services/auth.service';
import { LoginComponent } from './Pages/login/login.component';
import { ConfigurationsService } from './Services/configurations.service';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { NoAccessComponent } from './pages/no-access/no-access.component';


@NgModule({
  declarations: [
    AppComponent,
    
    CourseComponent,
    NavbarComponent,
    SummaryPipe,
    RatingComponent,
    SentencecasePipe,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    ChangePasswordComponent,
    DashboardComponent,
    ReportsComponent,
    AnalyticsComponent,
    NotfoundComponent,
    AboutusComponent,
    GithubJobsComponent,
    ViewpostComponent,
    LoginComponent,
    NoAccessComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      {path:'',component:DashboardComponent},
      {path:'courses',component:CourseComponent,canActivate:[AdminAuthGuard]},
      {path:'contact',component:ContactFormComponent},
      {path:'changepassword',component:ChangePasswordComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'reports',component:ReportsComponent,canActivate:[ AuthGuard ]},
      {path:'analytics',component:AnalyticsComponent,canActivate:[ AuthGuard ]},
      {path:'aboutus/:id',component:AboutusComponent},
      {path:'githubjobs/positions/:title/:location',component:GithubJobsComponent},
      {path:'viewpost/:id',component:ViewpostComponent},
      {path:'login',component:LoginComponent},
      {path:'noaccess',component:NoAccessComponent},
      {path:'**',component:NotfoundComponent}
    ]),
    HttpModule
  ],
  providers: [
    ConfigurationsService,
    AuthGuard,
    AuthService,
    AdminAuthGuard,
    BlogService,
    JSONData,
    CourseService,

    GithubJobsService,
    {provide: ErrorHandler,useClass:GlobalErrorhandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
