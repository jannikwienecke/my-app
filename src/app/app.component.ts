import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardWithImageListComponent } from './components/card-list/card-wtith-image-list.component';

@Component({
  standalone: true,
  imports: [CardWithImageListComponent, RouterModule],
  styleUrl: '../styles.css',
  selector: 'wienecke-root',
  template: ` <div>
    <wienecke-card-with-image-list
      [props]="{ items: items }"
    ></wienecke-card-with-image-list>
  </div>`,
})
export class AppComponent {
  items = [
    {
      src: 'assets/image.jpg',
      title: 'Title',
      description: 'Description',
    },
    {
      src: 'assets/image.jpg',
      title: 'Title',
      description: 'Description',
    },
    {
      src: 'assets/image.jpg',
      title: 'Title',
      description: 'Description',
    },
  ];

  title = 'my-app';
}
