import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lazy',
  standalone: true,
  imports: [CommonModule],
  template: `<p>lazy works!</p> `,
  styles: `
  .p{
    color: red
  }
  `,
})
export class LazyComponent {}
