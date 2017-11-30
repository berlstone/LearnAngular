import { NotFoundError } from './../../common/not-found-error';
import { AppError } from './../../common/app-error';
import { BlogService } from './../../Services/blog.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  constructor(private _blogService : BlogService, public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
  }

  posts:any[];
  ispending:boolean =false;

  ngOnInit(){

    this._blogService.getAll()
    .subscribe(allPosts=>this.posts = allPosts,
    (error:AppError)=>{
      if(error instanceof NotFoundError)
        this.toastr.error("Some error occured. Page not found!","Error");
      else if (error instanceof(AppError))  
      {
        this.toastr.error("Some error occured. Please check console for more details","Error");
        throw error.originalError;
      }

    }
  );
  }



loadPost(){

    this.ispending = true;

    this._blogService.getAll()
    .subscribe(response=> { 

      this.posts =  response
      this.ispending = false;
    },
    (error:AppError)=>{

      if(error instanceof NotFoundError)
        this.toastr.error("Some error occured. Page not found!","Error");
      else if (error instanceof(AppError))  
      {
        this.toastr.error("Some error occured. Please check console for more details","Error");
        throw error.originalError;
      }
    });
  }

  createPost(input: HTMLInputElement){

    let post:any = {title:input.value};

    this._blogService.create(JSON.stringify(post)) 
    .subscribe(newPost=>{
      post.id = newPost.id;
       this.posts.splice(0,0,post);
    },
    (error:AppError)=>{

      if(error instanceof NotFoundError)
        this.toastr.warning("An unexpected error occured","Error!")
      else
        this.toastr.error("Create post failed! please check log for more details","Error!")

       throw error.originalError;       
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
      
    this._blogService.delete(post.id)
    .subscribe(
      response=>{
        let index = this.posts.indexOf(post);
        this.posts.splice(index,1);
        this.toastr.success('Post Deleted Successfully', 'Success!');
      },
      (error:AppError)=>{

        if(error instanceof NotFoundError)
          this.toastr.warning("This post is not found on the server. It might have been deleted","Sorry!")
        else
          this.toastr.error("Edit post failed! please check log for more details","Error!")

          throw error.originalError;        
      }
    );
  }
}
