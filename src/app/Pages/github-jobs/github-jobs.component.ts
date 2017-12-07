import { AppError } from './../../common/app-error';
import { ActivatedRoute } from '@angular/router';
import { GithubJobsService } from './../../Services/github-jobs.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-github-jobs',
  templateUrl: './github-jobs.component.html',
  styleUrls: ['./github-jobs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GithubJobsComponent implements OnInit {
  jobs:any[];

  constructor(private githubService:GithubJobsService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(par=>{
      console.log(par);
      //alert(par.get('title'))
    });


    this.githubService.getAll()
    .subscribe(
      response=>{
        this.jobs = response;
      }, 
      (error:AppError)=>{
        console.log(error.originalError);
      });
  }

}
