import { Component, Input } from '@angular/core';
import { Toast, ToastService } from '../services/toast.service';
import { AnimationsModule } from '../modules/animations.module';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  animations: [AnimationsModule.fadeInOut],
})
export class ToastComponent {
  @Input() toasts = this.toastService.toasts;

  constructor(private toastService: ToastService) {}
}
