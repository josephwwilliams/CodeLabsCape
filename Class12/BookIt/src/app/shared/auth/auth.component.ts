import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { ToastService } from '../services/toast.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent {
  isLoginMode = true;

  errMsg: string = null;

  authObservable: Observable<AuthResponseData>;

  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  onSwitchAuthMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onAuthFormSubmit(formObj: NgForm) {
    if (formObj.invalid) return;

    const { email, password } = formObj.value;

    if (this.isLoginMode) {
      this.authObservable = this.authService.signIn(email, password);
    } else {
      this.authObservable = this.authService.signUp(email, password);
    }

    this.authObservable.subscribe(
      (res) => {
        console.log('Auth response success: ', res);
        if (this.errMsg) {
          this.errMsg = null;
        }
        this.toastService.toast({
          message: `${res.registered ? 'Welcome Back!' : 'Welcome!'}`,
          type: 'success',
        });
        this.router.navigate(['bookshelf']);
      },
      (error) => {
        console.log('Auth response error: ', error);
        this.errMsg = error.message;
      }
    );

    formObj.reset();
  }
}
