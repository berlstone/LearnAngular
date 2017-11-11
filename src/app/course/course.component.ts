import { BlogService } from './../blog.service';
import { Component, OnInit } from '@angular/core';
import  {JSONData} from '../sample.data'


@Component({
  selector: 'Course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
 
  constructor(public blogService: BlogService) { 
    
  }
  ngOnInit(){

  }
  sampledata = new JSONData();
  
  dummytext = "String Interpolation done in the right way";

  posts = this.sampledata.Posts;

  totalpics = this.sampledata.Photos.length;

  dumtext = this.blogService.getAlbums();
  servicedata = this.blogService.getUsers();
  btnIsActive = true;
  email = "berltone@gmail.com"
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
  
  courses = {
      title: `It gives us immense pleasure to service your financial requirement at HDFC Bank and thank you for Banking with us. 
      We are having many good investment plans like KIDS PLAN, KIDS A/C , SAVINGS PLAN, PROTECTION PLAN, RETIREMENT,TAX BENEFIT , & HEALTH PLAN `,
      rating: 4.978,
      students: 3788,
      price:197.67,
      releaseDate: new Date(2017,2,1)

  }
  toggle=true;

  get format(){ return this.toggle? 'dd-MM-yyyy':'short' }

  toggleFormat = function(){
    this.toggle = !this.toggle;
  }
}
