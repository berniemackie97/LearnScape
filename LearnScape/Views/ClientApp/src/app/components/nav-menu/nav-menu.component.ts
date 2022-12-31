import { Component } from "@angular/core";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-nav-menu",
    templateUrl: "./nav-menu.component.html",
    styleUrls: ["./nav-menu.component.css"],
})
export class NavMenuComponent {
    constructor(private userService: UserService, private router: Router) {}

    isExpanded = false;

    // Bind the isLoggedIn property to the isLoggedIn value in the UserService
    get isLoggedIn(): boolean {
        return this.userService.isLoggedIn;
    }
    set isLoggedIn(value: boolean) {
        this.userService.isLoggedIn = value;
    }

    ngOnInit() {
        // Get the value from local storage and update the isLoggedIn value in the UserService
        this.isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    }

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
