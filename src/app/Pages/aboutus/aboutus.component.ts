import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AppError } from './../../common/app-error';

import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Toast } from 'ng2-toastr/src/toast';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  charecters:any;
  routes:any;
  constructor( public toastr: ToastsManager, vcr: ViewContainerRef,private  route: ActivatedRoute) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.routes = this.route.paramMap.subscribe(
      
      param=>console.log(param .has('id'))
    )
   
    // this._service.getAll()
    // .subscribe(
    //   response=>{
    //     this.charecters = response;
    //   }, 
    //   (error:AppError)=>{
    //     this.toastr.error("Some error occured in fetrching the data. Please try again","Error!");
    //   });
  }

}
