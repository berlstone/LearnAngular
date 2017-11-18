import { JSONData } from './sample.data';
import { Injectable } from '@angular/core';

@Injectable()
export class BlogService {

  constructor(private sampleData:JSONData) { }
/**
 * name
 */
public getPosts() {
 return this.sampleData.Posts;

}
public getPostbyId(Id:number) {
  
}
public getComments() {
  
}
public getAlbums() {
  return "Album is working fine!";
}
public getPhotos() {
  
}
public getTodos() {
  
}
public getUsers() {
  
}

}
