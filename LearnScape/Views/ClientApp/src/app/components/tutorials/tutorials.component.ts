import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html'
})
export class TutorialsComponent {
  tutorials = [
    {
      title: 'Tutorial 1',
      description: 'This is the first tutorial in our platform.',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
      title: 'Tutorial 2',
      description: 'This is the second tutorial in our platform.',
      type: 'written',
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor massa at lectus fringilla, in eleifend metus fermentum. In euismod, metus ac vestibulum imperdiet, mi est porta nibh, ut placerat dui orci at dui. Nulla fringilla lectus vel nunc consectetur suscipit. Suspendisse potenti. Donec suscipit, nulla nec finibus hendrerit, quam urna malesuada nibh, at lobortis lacus arcu eget felis. Curabitur hendrerit velit nec diam dictum, ac dictum diam congue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce fringilla euismod tellus nec condimentum.</p>'
    },
    {
      title: 'Tutorial 3',
      description: 'This is the third tutorial in our platform.',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    }
  ];
}
