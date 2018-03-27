import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span>404: Not Found</span>
  `,
  styles: [
      `
      :host {
        text-align: center;
      }
    `,
  ],
})
export class NotFoundPageComponent {
}
