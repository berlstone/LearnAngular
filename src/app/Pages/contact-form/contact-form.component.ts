import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import {CommentValidators} from './commentValidator';
import {UsernameValidator} from './../../Validators/UsernameValidator';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  formbuilder;
  constructor(fb: FormBuilder) {

    this.formbuilder = fb.group({
      name: [],
      contact: fb.group({
        address : [],
        location: []
      }),
      courses: fb.array([])
    });
  }

  form2= new FormGroup({
    username : new FormControl('', [
      Validators.required,
      UsernameValidator.cannotContainSpace
     // UsernameValidator.shouldBeUnique
    ]),
    fullname: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    notes: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      CommentValidators.cannotContainSplChar,

    ])

  });
  register() {
    this.form2.setErrors({
      regerror: true, regerror_text: 'Sorry registration has failed due to fucking reason!'
    });

  }
  // Form Variables
  get fullname() {return this.form2.get('fullname'); }
  get notes() {return this.form2.get('notes'); }
  get username(){return this.form2.get('username'); }
  get formData() { return <FormArray>this.form2.get('coursename'); }

  eid_pattern= '[0-9]{3}-[0-9]{4}-[0-9]{7}-[0-9]{1}';
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
    //console.log(this.contacts);

  }
  countries = [
    {id: 'AE', name: 'United Arab Emirates'},
    {id: 'IN', name: 'India'},
    {id: 'US', name: 'United States of America'},
    {id: 'AF', name: 'Africa'},
    {id: 'SL', name: 'Srilanka'},
    {id: 'PK', name: 'Pakistan'}
  ];

  arrayform = new FormGroup({
    coursename : new FormArray([])
  });
  get courses (){
    return this.arrayform.get('coursename') as FormArray;
  }
  addCourse(course: HTMLInputElement){
    this.courses.push(new FormControl(course.value));
    course.value = '';
  }
  removeCourse(course: FormControl){
    const index = this.courses.controls.indexOf(course);
    this.courses.removeAt(index);
  }
  complexform = new FormGroup({
    name: new FormControl('', []),
    contact: new FormGroup({
        person: new FormControl(),
        address: new FormControl(),
        location: new FormControl()
    }),
    courses : new FormArray([])
  });
}
