import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardWithImageComponent } from '../card-with-image/card-wtith-image.component';

export interface CardWithImageListComponentProps {
  items: {
    title: string;
    description: string;
    src: string;
  }[];
}
@Component({
  selector: 'wienecke-card-with-image-list',
  standalone: true,
  imports: [CommonModule, CardWithImageComponent],
  // styleUrl: '../../../styles.css',
  template: `
    <div class="flex flex-col md:flex-row xl:space-y-0 xl:space-x-3 flex-wrap">
      @for(item of props.items; track item.title ) {
      <div class="p-2">
        <wienecke-card-with-image
          src="{{ item.src }}"
        ></wienecke-card-with-image>
      </div>
      }
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class CardWithImageListComponent {
  @Input({ required: true }) props: CardWithImageListComponentProps =
    {} as CardWithImageListComponentProps;
}
