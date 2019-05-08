import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lightbox-allinone';
  images =
    [
      {
        image: "assets/1.jpg",
        thumbnail: "assets/1.jpg"
      },
      {
        image: "assets/1.jpg",
        thumbnail: "assets/1.jpg"
      },
    ];

}
