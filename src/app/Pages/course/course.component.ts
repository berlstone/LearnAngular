import { CourseService } from './../../Services/course.service';
import { RatingEventArgs } from './../../components/rating/rating.component';
import { BlogService } from './../../Services/blog.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import  {JSONData} from './../../sample.data'
//import { ReturnStatement } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'Course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],

  encapsulation: ViewEncapsulation.Emulated
})

export class CourseComponent implements OnInit {
 
  constructor(private blogService: BlogService, private _courseService:CourseService) { 
    
  }
  ngOnInit(){

  }
  sampledata = new JSONData();
  
  dummytext = "String Interpolation done in the right way";

  posts = this.sampledata.Posts;

  totalpics = this.sampledata.Photos.length;

  dumtext = "Dummy Text";
  //courses = this._courseService.getCourses();
  //courses = this.sampledata.Posts.slice(0,20);
  courses =[]; 
  btnIsActive = true;
  email = "berltone@gmail.com";

  viewMode ='Mathematics';

  titlecase;

  onSuccess = ($event) =>{
    $event.stopPropagation();
    console.log('Success button is clicked');
    //alert('hello jangel');
  }
  onDivClick = ()=>{
    console.log("Div was clicked");
  }
  onKeyUp = ($event, lname? : string)=>{
    this.dumtext += $event.target.value + '| '
      //console.log("Enter was pressed");
      lname ? console.log(lname): null;
      console.log(this.email);
  }
  printemail = ()=>console.log(this.email);
  
  course = {
      title: `It gives us immense pleasure to service your financial requirement at HDFC Bank and thank you for Banking with us. 
      We are having many good investment plans like KIDS PLAN, KIDS A/C , SAVINGS PLAN, PROTECTION PLAN, RETIREMENT,TAX BENEFIT , & HEALTH PLAN `,
      rating: 4.978,
      students: 3788,
      price:197.67,
      releaseDate: new Date(2017,2,1),
      isFavourite :false
  }
  toggle=true;

  get format(){ return this.toggle? 'dd-MM-yyyy':'short' }

  toggleFormat = function(){
    this.toggle = !this.toggle;
  }

  onRatingChanged = (eventArgs:RatingEventArgs) => {
    console.log("Rating value changed. ", eventArgs)
  }
  loadCourses(){

    this.courses= [
      {id:1,CourseName:"Zoology",Credit:100,isUpdated:false},
      {id:2,CourseName:"Botany",Credit:100,isUpdated:false},
      {id:3,CourseName:"Chemistry",Credit:100,isUpdated:false},
    ];
  }
  addCourse=()=>{
    var ind = this.courses.length+1;
    this.courses.push( {id:ind,CourseName:"Random "+ind,Credit:100,isUpdated:false} );
  }
  removeCourse=(course)=>{
    var index = this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
  updateCourse=(course)=>{
    var index = this.courses.indexOf(course);
    course.CourseName+=" updated";
    course.isUpdated=true;
  }
  trackCourse(index,course){
    return course ? course.id:undefined;
  }
}
