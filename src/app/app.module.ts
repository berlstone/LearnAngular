import { CourseService } from './course.service';
import { JSONData } from './sample.data';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BlogService } from './blog.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SummaryPipe } from './summary.pipe';
import { RatingComponent } from './rating/rating.component';
import { SentencecasePipe } from './sentencecase.pipe';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CommentvalidatorComponent } from './commentvalidator/commentvalidator.component';



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
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [BlogService,JSONData,CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
