import { Component, ViewContainerRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { ButtonComponent } from './button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    ModalComponent,
    ButtonComponent,
  ],
  template: `
    <section>
      <button appButton [loading]="true" (click)="showInfoModal = true">
        Show Info modal
      </button>
      <app-modal
        [showModal]="showInfoModal"
        (closeModal)="showInfoModal = false"
      />
    </section>
  `,
  styles: ``,
})
export class AppComponent {
  showInfoModal = false;
}
