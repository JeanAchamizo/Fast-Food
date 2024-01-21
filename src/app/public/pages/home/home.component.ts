import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {

  images = [
    'assets/images/about.jpg',
    'assets/images/about.jpg',
    'assets/images/about.jpg',
  ];

}
