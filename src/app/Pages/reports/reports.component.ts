import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { BlogService } from './../../Services/blog.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private _blogService : BlogService, public toastr: ToastsManager, 
    vcr: ViewContainerRef, private route: ActivatedRoute, private navroute:Router) { 
    this.toastr.setRootViewContainerRef(vcr);
  }
  page:number=1;
  limit:number=10;
  sort:string ='title';
  order:string = 'asc';

  posts:any[];
  ispending:boolean =false;

  ngOnInit(){
    console.log('blog page onInit');
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
     
    ])  
    .switchMap(combined=> {

      this.page = +combined[1].get('page');
      this.limit = +combined[1].get('limit');
      this.sort = combined[1].get('sort');
      this.order = combined[1].get('order');
      
      this.ispending = true;
      return this._blogService.getAllPosts(this.page,this.limit,this.sort,this.order);

    })
    .subscribe(
      data=>{ this.posts = data; this.ispending = false;},
      error=>this.handleError

    );  

    
  }
  handleError(error:AppError){

    if(error instanceof NotFoundError)
    this.toastr.error("Some error occured. Page not found!","Error");
    else if (error instanceof(AppError))  
    {
      this.toastr.error("Some error occured. Please check console for more details","Error");
      throw error.originalError;
    }
  }


  navigate(dir:string){

    dir=='next' ? this.page++ : this.page--;
    
    this.navroute.navigate(
      ['/reports'],
      {queryParams:{page:this.page,limit:this.limit,sort:this.sort,order:this.order}})
  }
  
  createPost(input: HTMLInputElement){

    let post:any = {title:input.value};
    this.posts.splice(0,0,post);

    this._blogService.create(JSON.stringify(post)) 
    .subscribe(newPost=>{
        post.id = newPost.id;
        input.value='';
    },
    (error:AppError)=>{
      this.posts.splice(0,1);

      if(error instanceof NotFoundError)
        this.toastr.warning("An unexpected error occured","Error!")
      else
        this.toastr.error("Create post failed! please check log for more details","Error!")
      
        throw error;       
    })
  }

  editPost(post){
    
    this._blogService.edit(post.id)
    .subscribe(
      response=>{
        this.toastr.success('Post edited Successfully', 'Success!');
      },
      (error:AppError)=>{
    
        if(error instanceof NotFoundError)
          this.toastr.warning("This post is not found on the server","Warning!")
        else
          this.toastr.error("Edit post failed! please check log for more details","Error!")

          throw error.originalError;         
      }
    );
    
  }
  deletePost(post){

    let index = this.posts.indexOf(post);
    this.posts.splice(index,1); // Optimistic delete approach

    this._blogService.delete(post.id)
    .subscribe(
      response=>{
        this.toastr.success('Post Deleted Successfully', 'Success!');
      },
      (error:AppError)=>{
        this.posts.splice(0,0,post); //Add it back again

        if(error instanceof NotFoundError)
          this.toastr.warning("This post is not found on the server. It might have been deleted","Sorry!")
        else
          this.toastr.error("Edit post failed! please check log for more details","Error!")

          throw error.originalError;        
      }
    );
  }
}
