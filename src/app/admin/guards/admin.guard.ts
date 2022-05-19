import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { CanActivate } from "@angular/router";
import { AuthenticationHelper } from "src/app/home/helpers/authentication.helper";
 
@Injectable()
export class AdminGuard implements CanActivate {
 
    constructor(
        private authenticationHelper: AuthenticationHelper,
        private router: Router
    ) {
 
    }
 
    canActivate() {
        if (this.authenticationHelper.get())
            return true;
 
        this.router.navigate(['/']);
        return false;
    }
}
 



