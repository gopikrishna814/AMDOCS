import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpRequest, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private httpClient: HttpClient) { }

  onSignIn(email,password){
    const body={
        EMAIL:email,
        PASSWORD:password
    }
    let reqHeaders = new HttpHeaders();
    reqHeaders = reqHeaders.append('Content-type', 'application/json; charset=utf-8');
    // reqHeaders = reqHeaders.append('EMAIL', ""+email);
    // reqHeaders = reqHeaders.append('PASSWORD', ""+password);
    const req = new HttpRequest('POST', environment.onSignIn,body, { reportProgress: true, headers: reqHeaders });
    return this.httpClient.request(req);
}
authorizeUser(auth_token,emailId){
    const body = {
        "auth-token":auth_token,
        "email":emailId
    }
    let reqHeaders = new HttpHeaders();
    reqHeaders = reqHeaders.append('Content-type', 'application/json; charset=utf-8');
    const req = new HttpRequest('POST', environment.authorizeUser,body, { reportProgress: true, headers: reqHeaders });
    return this.httpClient.request(req);
}

getUserDetails(auth_token){
  const body={
      "auth-token":auth_token
  }
  let reqHeaders = new HttpHeaders();
  reqHeaders = reqHeaders.append('Content-type', 'application/json; charset=utf-8');
  const req = new HttpRequest('GET', environment.getUserDetails,{}, { reportProgress: true, headers: reqHeaders });
  return this.httpClient.request(req);
}

}
