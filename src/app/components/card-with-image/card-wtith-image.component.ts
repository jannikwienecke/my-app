import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'wienecke-card-with-image',
  standalone: true,
  imports: [CommonModule],
  styleUrl: '../../../styles.css',
  template: `
    <div class="wrapper">
      <div class="bg-white flex max-w-[424px] flex-col px-8 py-9">
        <img
          loading="lazy"
          srcset="{{src}}"
          class="aspect-[1.89] object-contain object-center w-full overflow-hidden self-stretch"
        />
        <div
          class="text-orange-600 text-base font-medium self-stretch whitespace-nowrap mt-6"
        >
          Unfallmeldedienst
        </div>
        <div class="text-neutral-900 text-xl font-medium self-stretch mt-5">
          CSV-Datei im Downloadbereich ab sofort verfügbar
        </div>
        <div
          class="overflow-hidden text-neutral-700 text-ellipsis text-base leading-7 self-stretch mt-8"
        >
          {{
            'Hiermit informieren wir über die Bereitstellung einer neuen CSV-Datei
          im Download Bereich, welche die aktuell zum Betrieb der
          KH-Versicherung befugten'.slice(0, 200) + '...'
          }}
        </div>
        <div class="flex gap-4 mt-12 self-start items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            class="aspect-square object-contain object-center w-3.5 fill-neutral-900 overflow-hidden shrink-0 max-w-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>

          <div class="text-orange-600 text-base leading-5">Mehr erfahren</div>
        </div>
      </div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class CardWithImageComponent {
  @Input() src = './assets/image.jpg';
}
