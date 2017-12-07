
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import { DataService } from './data.service';

@Injectable()
export class BlogService extends DataService {

  static url = "http://google.com";

  constructor( http: Http) { 
    super("https://jsonplaceholder.typicode.com/posts", http);
  }


}