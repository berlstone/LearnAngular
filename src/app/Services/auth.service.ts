import { ConfigurationsService } from './configurations.service';
import { Router } from '@angular/router';

import { Http,RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired, AuthHttp } from 'angular2-jwt';
import { Response } from '@angular/http';

@Injectable()
export class AuthService {


  public get loginUrl() { return this.configurations.loginUrl; }
  public get homeUrl() { return this.configurations.baseUrl; }


  public loginRedirectUrl: string;
  public logoutRedirectUrl: string;
  
  constructor(private http:Http,private authHttp:Http, private router:Router, private configurations :ConfigurationsService) { }

  login(credentials){

    let headers = new Headers(
      { 'Content-Type': 'application/json' }
    );
    let options = new RequestOptions({ headers: headers });


    return this.http.post(
      this.configurations.apiUrl + "/auth/requesttoken", 
      JSON.stringify(credentials),
      options)
    .map((res)=>{
      let response = res.json();
      if (response && response.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        //localStorage.setItem('currentUser', JSON.stringify(res));
        localStorage.setItem('token', response.token);
        return true;
    }
      else return false;
    })
    .catch((error:Response)=>{
      let erx:any = error;

      if(erx.status == 400)
      {
        console.log("This is a 400 bad request");
        console.log(erx);
        return Observable.throw(erx);
      }
      else{
        console.log("400 bad request could not be identified");
        return Observable.throw(error);
      }
                  
    });
   
  }
/*
  private processLoginResponse(response: Response, rememberMe: boolean) {
    
            let response_token = response.json();
            let accessToken = response_token.access_token;
    
            if (accessToken == null)
                throw new Error("Received accessToken was empty");
    
            let idToken: string = response_token.id_token;
            let refreshToken: string = response_token.refresh_token;
            let expiresIn: number = response_token.expires_in;
    
            let tokenExpiryDate = new Date();
            tokenExpiryDate.setSeconds(tokenExpiryDate.getSeconds() + expiresIn);
    
            let accessTokenExpiry = tokenExpiryDate;
    
            let jwtHelper = new JwtHelper();
            let decodedIdToken = jwtHelper.decodeToken(response_token.id_token);
    
            let permissions: PermissionValues[] = Array.isArray(decodedIdToken.permission) ? decodedIdToken.permission : [decodedIdToken.permission];
    
            if (!this.isLoggedIn)
                this.configurations.import(decodedIdToken.configuration);
    
            let user = new User(
                decodedIdToken.sub,
                decodedIdToken.name,
                decodedIdToken.fullname,
                decodedIdToken.email,
                decodedIdToken.jobtitle,
                decodedIdToken.phone,
                Array.isArray(decodedIdToken.role) ? decodedIdToken.role : [decodedIdToken.role]);
            user.isEnabled = true;
    
            this.saveUserDetails(user, permissions, accessToken, idToken, refreshToken, accessTokenExpiry, rememberMe);
    
            this.reevaluateLoginStatus(user);
    
            return user;
        }
    
    
        private saveUserDetails(user: User, permissions: PermissionValues[], accessToken: string, idToken: string, refreshToken: string, expiresIn: Date, rememberMe: boolean) {
    
            if (rememberMe) {
                this.localStorage.savePermanentData(accessToken, DBkeys.ACCESS_TOKEN);
                this.localStorage.savePermanentData(idToken, DBkeys.ID_TOKEN);
                this.localStorage.savePermanentData(refreshToken, DBkeys.REFRESH_TOKEN);
                this.localStorage.savePermanentData(expiresIn, DBkeys.TOKEN_EXPIRES_IN);
                this.localStorage.savePermanentData(permissions, DBkeys.USER_PERMISSIONS);
                this.localStorage.savePermanentData(user, DBkeys.CURRENT_USER);
            }
            else {
                this.localStorage.saveSyncedSessionData(accessToken, DBkeys.ACCESS_TOKEN);
                this.localStorage.saveSyncedSessionData(idToken, DBkeys.ID_TOKEN);
                this.localStorage.saveSyncedSessionData(refreshToken, DBkeys.REFRESH_TOKEN);
                this.localStorage.saveSyncedSessionData(expiresIn, DBkeys.TOKEN_EXPIRES_IN);
                this.localStorage.saveSyncedSessionData(permissions, DBkeys.USER_PERMISSIONS);
                this.localStorage.saveSyncedSessionData(user, DBkeys.CURRENT_USER);
            }
    
            this.localStorage.savePermanentData(rememberMe, DBkeys.REMEMBER_ME);
        }
*/
  logout(){
    // remove user from local storage to log user out
    localStorage.removeItem('token');

    
  }
  isLoggedIn(): boolean{

    return tokenNotExpired();

    /*
    let jwtHelper = new JwtHelper();
    let token = localStorage.getItem('token');
    if(!token)
      return false;
    let expirationDate = jwtHelper.getTokenExpirationDate(token);
    let isExpired = jwtHelper.isTokenExpired(token);

    console.log("expirationDate",expirationDate);
    console.log("isExpired",isExpired);

    return !isExpired;
    */
  }
  private handleError(error:Response)
  {
    console.log(error);
    return Observable.throw( error );
  }
  get currentUser(){
    let token = localStorage.getItem('token')
    if(token)
    {
      let decodedtoken =  new JwtHelper().decodeToken(token);
      //console.log(decodedtoken);
      return decodedtoken;
    }
    return null;
  }
  getAuthenticatedData(){

      let headers = new Headers;
      let token = localStorage.getItem('token');

      headers.append("Authorization","Bearer " + token);
      headers.append("Content-Type","application/json");

      let options = new RequestOptions({headers: headers});

      return this.http.get(this.configurations.apiUrl + "/Auth/Test",options)
      .map((res)=> res)
      // .catch((error:Response)=>{
      //   let erx:any = error;
  
      //   if(erx.status == 401)
      //   {
      //     console.log("Sorry this user is not authenticated");
      //     return Observable.throw(erx);
      //   }
      //   else{
      //     console.log("400 bad request could not be identified");
      //     return Observable.throw(error);
      //   }
                    
      // });
    
  }
  getAuthData(){
    
          return this.authHttp.get(this.configurations.apiUrl + "/Auth/Test")
          .map((res:Response)=> {
            //if(res.status == 401)
             //res = "Unauthorized : 401";
             res = res;
          })
          .catch((error:Response)=>{
            let erx:any = error;
      
            if(erx.status == 401)
            {
              console.log("Sorry this user is not authenticated");
              return Observable.throw(erx);
            }
            else{
              console.log("400 bad request could not be identified");
              return Observable.throw(error);
            }
                        
          });
      }
}
