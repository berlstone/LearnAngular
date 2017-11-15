import { Component,  } from '@angular/core';

@Component({
  selector: 'app-like',
  template:`
  <i class="fa like" [class] = "cls"  aria-hidden="true" (click)="toggle($event)"><strong> {{counter}} </strong></i>
  `,
  styles:[`
    .like { cursor:pointer;}
  `]
})
export class LikeComponent  {

  
  counter=0;
  isLike = false;
  cls = "fa-heart-0"
  toggle($event){
    this.isLike = !this.isLike;
    this.counter = this.isLike ? 1 : 1;
    this.cls= this.isLike ? "fa-heart" : "fa-heart-0";
  }
}
