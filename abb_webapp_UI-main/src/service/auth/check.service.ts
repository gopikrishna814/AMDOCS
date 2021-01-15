import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class CheckGuard implements CanActivate {

    constructor(
        private router: Router) { }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if(localStorage.getItem("auth_token")){
            this.router.navigate(['dashboard']);
            return false;
        }
        else{
            return true;
        }
    
}
}