import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoggedIn: boolean = false;

  login() {
    this.isLoggedIn = true;
    console.log('Is Logged In? :', this.isLoggedIn);
  }

  logout() {
    this.isLoggedIn = false;
    console.log('Is Logged In? :', this.isLoggedIn);
  }
}
