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
    isLoggedIn = false;

    ngOnInit() {
        // Get the value from local storage
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        // Set the isLoggedIn property based on the value from local storage
        this.isLoggedIn = isLoggedIn === "true";
    }

    collapse() {
        this.isExpanded = false;
    }

    toggle() {
        this.isExpanded = !this.isExpanded;
    }
}
