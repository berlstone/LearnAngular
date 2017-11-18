import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  constructor() { }

  eid_pattern="[0-9]{3}-[0-9]{4}-[0-9]{7}-[0-9]{1}";
  contacts = [];
  log(value){
  console.log(value);
  }
  submit(f){
    //console.log(f);

    this.addContact(f.value);
    f.resetForm();
  }
  addContact(c){

    //var contact = { id:0,fullName:c.fullName,eid : c.eid,favMobile:c.favMobile }
    this.contacts.push(c);
    console.log(this.contacts);

  }
}
