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
}
