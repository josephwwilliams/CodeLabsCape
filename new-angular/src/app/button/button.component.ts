import { Component, HostBinding, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: '[appButton]',
  standalone: true,
  imports: [CommonModule],
  template: ` <ng-content /> `,
  styles: ``,
})
export class ButtonComponent {
  @HostBinding('class')
  get styles() {
    return 'class="px-4 py-2 text-white bg-green-600 hover:bg-green-800 transition duration-300 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium text-sm text-center dark:bg-green-500 dark:hover:bg-green-700 dark:focus:ring-green-400"';
  }

  @Input() loading: boolean = false;
}
