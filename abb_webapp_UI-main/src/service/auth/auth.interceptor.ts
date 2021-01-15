import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent  } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import {catchError} from 'rxjs/internal/operators'
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private router: Router, private authService : AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // console.log('Intercepted.', req);
        const clonedRequest = req.clone({headers: req.headers.set("X-AUTH-TOKEN", localStorage.getItem("auth_token"))});
        if(localStorage.getItem("auth_token") != null){
            //return next.handle(clonedRequest);
   
            return next.handle(clonedRequest).pipe(catchError((error, caught)=> {
                console.log(error);
                // this.handleTokenExpiry(error);
                return of(error);
            }) as any);
           }else{
                return next.handle(req);
            }
        // throw new Error("Method not implemented.");
    }

}