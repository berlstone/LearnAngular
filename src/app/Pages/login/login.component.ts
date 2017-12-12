import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { UsernameValidator } from './../../Validators/UsernameValidator';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/catch';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   }

  form1= new FormGroup({
    email : new FormControl('', [
      Validators.required,
      UsernameValidator.cannotContainSpace
     // UsernameValidator.shouldBeUnique
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ])

  });

  get email(){ return this.form1.get('email'); }
  get password(){ return this.form1.get('password'); }

  login(){

    this._authService.login({username: this.email.value, password: this.password.value})
    .subscribe((res: any) => {

      if (res)
      {
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');

        this.router.navigate([returnUrl || '/dashboard']);
      }
      else
        this.form1.setErrors({login_failed: res._body});

    }, (error: any) => {

      if (error.status == '400')
        this.form1.setErrors({login_failed: error._body});
      else
        console.log(error);
    });

  }
}
