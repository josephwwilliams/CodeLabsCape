import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from './button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  template: `
    <div
      *ngIf="showModal"
      class="fixed top-0 right-0 left-0 bottom-0 w-screen h-screen flex justify-center items-center z-50 backdrop-blur-lg backdrop-brightness-50"
    >
      <div
        #container
        class="p-4 rounded-lg shadow-lg bg-gray-100 flex flex-col  max-w-2xl w-full"
      >
        <button appButton (click)="close()">Close</button>
        <ng-content />
      </div>
    </div>
  `,
  imports: [ButtonComponent, CommonModule],
})
export class ModalComponent {
  @Input() showModal: boolean = false;
  @Output() closeModal: EventEmitter<any> = new EventEmitter();
  @ViewChild('container') container: ElementRef | undefined;

  @HostListener('click', ['$event'])
  click(event: Event) {
    if (this.container && event.target !== this.container.nativeElement) {
      this.close();
    }
  }

  close() {
    this.closeModal.emit();
  }
}
