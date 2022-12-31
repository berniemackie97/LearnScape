import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
    email = "";
    password = "";
    errorMessage = "";

    constructor(private userService: UserService, private router: Router) {}

    ngOnInit(): void {}

    login(email: string, password: string): void {
        // Set the logged in status to true
        this.userService.isLoggedIn = true;
        // Set a value in local storage indicating that the user is logged in
        localStorage.setItem("isLoggedIn", "true");
        this.router.navigate(["/"]);
    }
}
