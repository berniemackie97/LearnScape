import { Component, OnInit } from "@angular/core";

import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-profile",
    templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {
    constructor(private userService: UserService, private router: Router) {}

    user: any; // Replace with actual user data type
    editedName = "";
    editedEmail = "";
    errorMessage = "";

    logout(): void {
        this.userService.isLoggedIn = false;
        localStorage.setItem("isLoggedIn", "false");
        this.router.navigate(["/"]);
    }

    ngOnInit(): void {
        this.user = // Retrieve user data from server or other source
            this.editedName = this.user.name;
        this.editedEmail = this.user.email;
    }

    saveChanges(): void {
        // Perform save process and handle any errors
    }
}
