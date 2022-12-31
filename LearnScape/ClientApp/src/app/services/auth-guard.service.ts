import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { UserService } from "./user.service";

@Injectable({
    providedIn: "root",
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router, private userService: UserService) {}

    canActivate(): boolean {
        // Check if the user is logged in
        if (this.userService.isLoggedIn) {
            return true;
        } else {
            // Redirect the user to the login page
            this.router.navigate(["/login"]);
            return false;
        }
    }
}
