import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input('is-favourite') isFavourite = true;
  @Output('change') change = new EventEmitter();

  toggleState=()=>{ 
    this.isFavourite = !this.isFavourite 
    this.change.emit({isSelected: this.isFavourite})
  }
}

export interface RatingEventArgs {
isSelected : boolean
}