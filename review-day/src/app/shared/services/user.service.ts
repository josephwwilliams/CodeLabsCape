import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$ = new BehaviorSubject<User>(null);

  get user() {
    return this.user$.asObservable();
  }

  login() {
    this.user$.next({ id: 4, name: 'Jimmy' });
  }

  logout() {
    this.user$.next(null);
  }
}
