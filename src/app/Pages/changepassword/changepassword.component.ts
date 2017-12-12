
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { PasswordValidators } from './passwordValidators';


@Component({
  selector: 'changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']

})
export class ChangePasswordComponent  {
  chpwdForm;
  constructor(fb: FormBuilder) {
    this.chpwdForm = fb.group({
      oldpassword: ['', [Validators.required, PasswordValidators.checkOldPassword]],
      newpassword: ['', [Validators.required]],
      repeatpassword: ['', [Validators.required]]
    }, {
      validator: PasswordValidators.repeatpassworderror
    });

  }

  // Form Variables
  get oldpassword(){return this.chpwdForm.get('oldpassword'); }
  get newpassword(){return this.chpwdForm.get('newpassword'); }
  get repeatpassword(){return this.chpwdForm.get('repeatpassword'); }

  validateForm(){

    if (this.chpwdForm.dirty && this.chpwdForm.valid) {
      //alert(`Password is changed successfully`);
      this.chpwdForm.setErrors({errors: false, error_message: 'Password is changed successfully'});
    }
    else
    {
      this.chpwdForm.setErrors({errors: true, error_message: 'Please check validation errors'});
      //alert(`Please check validation errors`);
    }
  }
  // checkRepeatPassword (newpassword:HTMLInputElement,repeatpassword:HTMLInputElement){
  //   console.log(newpassword.value + ' ' + repeatpassword.value);
  //   if(newpassword.value!=repeatpassword.value)
  //   this.repeatpassword.setErrors({repeatpassworderror:true});
  // }

}
