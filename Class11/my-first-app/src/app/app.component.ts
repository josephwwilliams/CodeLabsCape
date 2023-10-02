import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Joseph';

  quote = '';

  // boxes = [0, 0, 0, 0, 0];
  users = ['Tim', 'Bob', 'Sam'];

  showSecret = false;

  ngOnInit() {}

  showSecretFunction() {
    this.showSecret = !this.showSecret;
  }
}
