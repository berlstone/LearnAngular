import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { BlogService } from '../../Services/blog.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewpostComponent implements OnInit {
  //Query Parameters
  originalPostId: number;
  postId: number;
  page= 1;
  limit= 10;
  sort = 'title';
  order = 'asc';

  post: any;
  isLoaded = false;
  constructor(private actRoute: ActivatedRoute, private blogService: BlogService, private route: Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    console.log('view post page onInit');

    this.originalPostId = +this.actRoute.snapshot.paramMap.get('id');

    // this.page = +this.actRoute.snapshot.queryParams .get('page');
    // this.limit = +this.actRoute.snapshot.queryParams.get('limit');
    // this.sort = this.actRoute.snapshot.queryParams.get('sort');
    // this.order = this.actRoute.snapshot.queryParams.get('order');

    // this.actRoute.paramMap.subscribe(
    //   param=>{
    //     this.postId = +param.get('id')
    //     this.fetchPost(this.postId);
    //   }
    // )

    Observable.combineLatest([
      this.actRoute.paramMap,
      this.actRoute.queryParamMap
    ])
    .switchMap(combined => {
      this.isLoaded = false;
      //From ParamMap
      this.postId = +combined[0].get('id');

      //from QueryparamMap
      this.page = +combined[1].get('page');
      this.limit = +combined[1].get('limit');
      this.sort = combined[1].get('sort');
      this.order = combined[1].get('order');

      //Call the service now and return the observable to subscribe method
      return this.blogService.getById(this.postId);
      //return null;
    })
    .subscribe(post => {
      console.log('subscribed');
      this.isLoaded = true;
      this.post = post;
      //this.fetchPost( this.postId);
    });


  }
  fetchPost(id: number)
  {
        //Get post byt id
      this.blogService.getById(id)
      .subscribe(postDetail => {
        this.post = postDetail;
        this.isLoaded = true;
        this.toastr.success('Post is loaded successfully!', 'Success!');
      },
      (error: AppError) => {
        if (error instanceof NotFoundError)
        {
          this.toastr.error('Sorry this post is not found on server!', 'Error!');

        }
        else throw error;
      });
  }
  navigateBack(){

    this.route.navigate( ['/reports'], {
      queryParams: {page: this.page, limit: this.limit, sort: this.sort, order: this.order, postId: this.originalPostId}
    });

  }
  randomPost(){
    this.route.navigate(
      ['/viewpost', Math.random()],
      {queryParams: {page: this.page, limit: this.limit, sort: this.sort, order: this.order, postId: this.originalPostId}
  });
  }
}
