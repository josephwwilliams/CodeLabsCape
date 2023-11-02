import { Component } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pipe-example';

  searchFilter: string = '';

  heroes: Hero[] = [
    { name: 'Superman' },
    { name: 'Wonder Woman' },
    { name: 'Batman' },
    { name: 'Spider-Man' },
    { name: 'Iron Man' },
    { name: 'Captain America' },
    { name: 'Thor' },
    { name: 'Hulk' },
  ];
}
