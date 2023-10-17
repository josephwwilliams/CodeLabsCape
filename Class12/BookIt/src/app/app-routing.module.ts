import { Route, RouterModule } from '@angular/router';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';
import { NgModule } from '@angular/core';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';

const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/bookshelf',
    pathMatch: 'full',
  },
  {
    path: 'bookshelf',
    component: BookshelfComponent,
    children: [
      {
        path: '',
        component: BookshelfHomeComponent,
      },
      {
        path: ':id',
        component: BookDetailsComponent,
      },
    ],
  },
  {
    path: 'library',
    component: LibraryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
