import { Http } from '@angular/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class GithubJobsService extends DataService{

  constructor(http: Http) {
    super('https://jobs.github.com/positions.json?description=python&location=sf&full_time=true', http);
  }

}
