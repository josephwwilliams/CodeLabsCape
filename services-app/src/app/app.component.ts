import { Component, inject } from '@angular/core';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'services-app';

  constructor(public userService: UserService) {}

  ngOnInit() {
    console.log('Is Logged In?: ', this.userService.isLoggedIn);
  }

  login = this.userService.login;

  logout = this.userService.logout;
}
