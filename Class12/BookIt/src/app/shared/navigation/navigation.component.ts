import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  collapsed: boolean = true;
  show: boolean = false;
  isAuthenticated: boolean = false;

  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) {}

  saveData() {
    this.httpService.saveBooksToFirebase();
  }

  fetchData() {
    this.httpService.fetchBooksFromFirebase();
  }

  ngOnInit() {
    this.authService.currentUser.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy() {
    this.authService.currentUser.unsubscribe();
  }

  signOut() {
    this.authService.signOut();
  }
}
