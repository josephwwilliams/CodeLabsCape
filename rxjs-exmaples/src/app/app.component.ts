import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  Observable,
  combineLatest,
  delay,
  map,
  of,
  take,
  tap,
  timer,
} from 'rxjs';

interface Post {
  title: string;
  body: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs-exmaples';
  ngOnInit() {
    const firstTimer = timer(0, 1000);
    const secondTimer = timer(500, 1000);
    const combinedTimers = combineLatest([firstTimer, secondTimer]);
    combinedTimers.subscribe((value) => console.log(value));
  }
}
