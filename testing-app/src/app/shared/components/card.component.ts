import { Component, HostBinding, Input } from '@angular/core';

const className = 'p-8 border rounded-md bg-green-300';

@Component({
  selector: 'div[appCard]',
  standalone: true,
  template: `<ng-content />`,
})
export class CardComponent {
  @Input() class: string = '';
  @HostBinding('class')
  get styles() {
    return className + ' ' + this.class;
  }
}
