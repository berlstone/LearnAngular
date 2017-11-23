import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms'
import {CommentValidators} from './commentValidator'
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  constructor() { }

  form2= new FormGroup({
    
    fullname:new FormControl('',[Validators.required,Validators.minLength(3)]),
    notes: new FormControl('',[
      Validators.required,
      Validators.minLength(3), 
      CommentValidators.cannotContainSplChar
    ])
    
  });

  get fullname() {return this.form2.get("fullname");}
  get notes() {return this.form2.get("notes");}


  eid_pattern="[0-9]{3}-[0-9]{4}-[0-9]{7}-[0-9]{1}";
  contacts = [];

  log(value){
  console.log(value);
  }
  submit(f){
<<<<<<< HEAD
    //console.log(f);
=======
    console.log(f);

>>>>>>> 461089430c9b556794445ec9f78ac7abb9675caa
    this.addContact(f.value);
    f.resetForm();
  }
  addContact(c){

    //var contact = { id:0,fullName:c.fullName,eid : c.eid,favMobile:c.favMobile }
    this.contacts.push(c);
    //console.log(this.contacts);

  }
  countries = [
    {id:'AE', name:'United Arab Emirates'},
    {id:'IN', name:'India'},
    {id:'US', name:'United States of America'},
    {id:'AF', name:'Africa'},
    {id:'SL', name:'Srilanka'},
    {id:'PK', name:'Pakistan'}
  ];
}
