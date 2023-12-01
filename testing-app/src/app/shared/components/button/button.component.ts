import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

const className =
  'px-4 py-2 rounded shadow border bg-green-500 hover:bg-green-600 text-white transition-all duration-150 ease-in-out';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content /> `,
  styles: [],
})
export class ButtonComponent {
  @Input() class: string = '';
  @HostBinding('class')
  get styles() {
    return className + ' ' + this.class;
  }
}
