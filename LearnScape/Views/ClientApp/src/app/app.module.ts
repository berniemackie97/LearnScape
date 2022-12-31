import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./services/auth-guard.service";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";
import { HomeComponent } from "./components/home/home.component";
import { CoursesComponent } from "./components/courses/courses.component";
import { TutorialsComponent } from "./components/tutorials/tutorials.component";
import { CommunityComponent } from "./components/community/community.component";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "courses", component: CoursesComponent },
    { path: "tutorials", component: TutorialsComponent },
    { path: "community", component: CommunityComponent },
    { path: "login", component: LoginComponent },
    { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
];

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CoursesComponent,
        TutorialsComponent,
        CommunityComponent,
        LoginComponent,
        ProfileComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(routes),
    ],
    exports: [RouterModule],
    providers: [AuthGuard],
    bootstrap: [AppComponent],
})
export class AppModule {}
