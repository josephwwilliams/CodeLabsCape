import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentPage: string = 'bookshelf';
  title = 'BookIt';

  private http = inject(HttpClient);

  onNavigatePage(page: string) {
    this.currentPage = page;
  }

  ngOnInit() {
    this.http
      .get('http://localhost:3000/')
      .subscribe((res) => console.log(res));
  }
}
