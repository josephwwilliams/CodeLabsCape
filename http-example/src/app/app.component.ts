import { Component } from '@angular/core';
import { DataService } from './shared/services/data.service';
import { Subscription, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'http-example';

  books = this.dataService.getBooks().pipe(map((data: any) => data.docs));

  constructor(private dataService: DataService) {}
}
