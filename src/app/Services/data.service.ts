
import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { AsyncValidator } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

 
  constructor(public url:string, private http: Http) { }

  public getAll() {
  
    return this.http.get(this.url)
    .map(response=>response.json())
    .catch(this.handleError);
     
  }
  public create(resource:any) {
    
      return this.http.post(this.url,JSON.stringify(resource))
      .map(response=>response.json())
      .catch(this.handleError);
       
  }
  public edit(id:number) {
    
      return this.http.patch(this.url + "/"+ id,JSON.stringify({isRead:true}))
      .map(response=>response.json())
      .catch(this.handleError);
       
  }
  public delete(id) {
    
      return this.http.delete(this.url+ '/'+ id)
      .map(response=>response.json())
      .catch(this.handleError);
        
  }
  
    public getById(Id:number) {
    return this.http.get(this.url);
  }
   
  
  private handleError(error:Response)
  {
    if(error.status == 400 || error.status == 0)
      return Observable.throw(new BadInputError());
    else if(error.status === 404)
      return Observable.throw(new NotFoundError());
  
    return Observable.throw( new AppError(error)  );
  }
  
  
}
