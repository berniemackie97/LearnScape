import { Component } from "@angular/core";

@Component({
    selector: "app-courses",
    templateUrl: "./courses.component.html",
})
export class CoursesComponent {
    courses = [
        {
            title: "Course 1",
            description: "This is the first course in our platform.",
        },
        {
            title: "Course 2",
            description: "This is the second course in our platform.",
        },
        {
            title: "Course 3",
            description: "This is the third course in our platform.",
        },
    ];
}
