import { Component } from '@angular/core';
import { DataService, Post } from './shared/services/data.service';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = this.userService.user;

  constructor(private userService: UserService) {}

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }
}
