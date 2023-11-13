import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from '../lazy/lazy.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LazyComponent],
  template: `
    <section>
      <p>home works!</p>
      @defer (on timer(5s)) {
      <app-lazy />
      } @loading (minimum 3000ms) {
      <h1>Loading</h1>
      }
    </section>
  `,
})
export class HomeComponent {}
