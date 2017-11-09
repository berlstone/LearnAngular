import { BlogService } from './blog.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
