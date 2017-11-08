import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import  {animate } from '@angular/animations'

@Component({
  selector: 'Course',
  
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  dummytext = "String Interpolation done in the right way";

}
