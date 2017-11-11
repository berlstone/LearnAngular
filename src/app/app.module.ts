import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BlogService } from './blog.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { SummaryPipe } from './summary.pipe';
import { RatingComponent } from './rating/rating.component';
import { SentencecasePipe } from './sentencecase.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    NavbarComponent,
    HeroDetailComponent,
    SummaryPipe,
    RatingComponent,
    SentencecasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
