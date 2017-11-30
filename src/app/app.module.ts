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
    NotfoundComponent
    
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
      {path:'courses',component:CourseComponent},
      {path:'contact',component:ContactFormComponent},
      {path:'changepassword',component:ChangePasswordComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'reports',component:ReportsComponent},
      {path:'analytics',component:AnalyticsComponent},
      {path:'**',component:NotfoundComponent}
    ]),
    HttpModule
  ],
  providers: [
    BlogService,
    JSONData,
    CourseService,
    {provide: ErrorHandler,useClass:GlobalErrorhandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
