import { Component } from '@angular/core';
import { ToastService } from './shared/services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'BookIt';

  type: 'warn' | 'error' | 'success' = 'warn';
  constructor(private toastService: ToastService) {}

  createToast() {
    this.toastService.toast(
      {
        type: this.type,
        message: 'Cool toast!',
      },
      3000
    );
  }
}
