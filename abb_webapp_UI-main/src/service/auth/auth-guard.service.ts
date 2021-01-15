import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from './auth.service';
import { HttpEvent, HttpEventType, HttpErrorResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import {  of } from 'rxjs';
import { catchError } from 'rxjs/internal/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    isAuthorized;
    tenantId;
    constructor(
        private router: Router,
        private authenticationService: AuthService,private http: HttpClient,private toastr: ToastrService
    ) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // console.log("enter canactivate")
           const body = {
                "auth-token":localStorage.getItem("auth_token"),
                "email":localStorage.getItem("emailId")
            }
        let reqHeaders = new HttpHeaders();
        reqHeaders = reqHeaders.append('Content-type', 'application/json; charset=utf-8');
        this.isAuthorized = await this.http.post<any>(environment.authorizeUser, body, { headers:reqHeaders }).pipe(catchError((error, caught)=> {
            console.log(error);
            this.handleTokenExpiry(error);
            return of(error);
        }) as any).toPromise();

        // console.log("isAuthorized",this.isAuthorized)
      if(this.isAuthorized.authorized == true){
        if(localStorage.getItem("tenant_id") == undefined){
            let reqHeaders = new HttpHeaders();
            reqHeaders = reqHeaders.append('Content-type', 'application/json; charset=utf-8');
            this.tenantId = await this.http.get<any>(environment.tenantCall, { headers:reqHeaders }).pipe(catchError((error, caught)=> {
        console.log(error);
        this.handleTokenExpiry(error);
        return of(error);
    }) as any).toPromise();
    localStorage.setItem("tenant_id",this.tenantId[0].id);
        }
        return true;
    }
    else{
        this.toastr.error("User not Authenticated!")
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
    
    }
    private handleTokenExpiry(err: HttpErrorResponse){
        return false;
        
    }
    
}