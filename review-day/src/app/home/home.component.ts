import { Component } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  timer = interval(1000);
  subscription = new Subscription();

  ngOnInit() {
    this.subscription.add(this.timer.subscribe((data) => console.log(data)));
    this.subscription.add(this.timer.subscribe((data) => console.log(data)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
