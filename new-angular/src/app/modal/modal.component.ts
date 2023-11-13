import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  template: `
    <section
      *ngIf="showModal"
      class="fixed top-0 right-0 left-0 bottom-0 w-screen h-screen flex justify-center items-center z-50 backdrop-blur-lg backdrop-brightness-50"
    >
      <div
        class="p-4 rounded-lg shadow-lg bg-gray-100 flex flex-col  max-w-2xl w-full"
      >
        <button appButton (click)="close()">Close Button</button>
        <div>
          <ng-content></ng-content>
        </div>
      </div>
    </section>
  `,
})
export class ModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();

  close() {
    console.log('hello');
    this.closeModal.emit();
  }
}
