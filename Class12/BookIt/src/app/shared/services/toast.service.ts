import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  type: 'warn' | 'success' | 'error';
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toasts$: BehaviorSubject<Toast[]> = new BehaviorSubject<Toast[]>([]);

  get toasts() {
    return this.toasts$.asObservable();
  }

  toast(toast: Toast, duration?: number) {
    const currentToasts = this.toasts$.getValue();
    this.toasts$.next([...currentToasts, toast]);

    setTimeout(
      () => {
        this.removeToast(toast);
      },
      duration ? duration : 3000
    );
  }

  removeToast(toast: Toast) {
    const currentToasts = this.toasts$.getValue();
    this.toasts$.next(currentToasts.filter((t) => t !== toast));
  }
}
