
import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { AsyncValidator } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw';

@Injectable()
export class DataService {

  public url:string;
  constructor(private _url:string, private http: Http) { 
    this.url = _url;
  }

  public getAll() {
  
    // const headerDict = {
    //   'Access-Control-Allow-Methods': 'GET',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    // }
    
    // const requestOptions = {                                                                                                                                                                                 
    //   headers: new Headers(headerDict), 
    // };
    
    //let requestOptions = new RequestOptions();
    //requestOptions.headers.append('Access-Control-Allow-Methods', 'GET');
    //requestOptions.headers. append('Access-Control-Allow-Origin', '*');
    //requestOptions.headers.append('Access-Control-Allow-Headers', 'Content-Type');

    // let options = new RequestOptions(
    //   {headers: new Headers(
    //     {
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Methods': 'GET',
    //       'Access-Control-Allow-Headers': 'Content-Type'
    //   },
        
    //   )});

    return this.http.get(this.url)
    .map(response=>response.json())
    .catch(this.handleError);
     
  }
  getAllPosts(page:number,limit:number,sort:string,order:string){

    return this.http.get(this.url + "?_page="+ page +"&_limit="+limit+"&_sort=title")
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
      //.toPromise() //eager operation
      .catch(this.handleError);
        
  }
  
    public getById(id:number) {

      return this.http.get(this.url+ '/'+ id)
      .map(response=>response.json())
      .catch(this.handleError);

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
