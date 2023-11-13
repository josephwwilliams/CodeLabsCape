import { Route, RouterModule } from '@angular/router';
import { BookshelfComponent } from './bookshelf/bookshelf.component';
import { LibraryComponent } from './library/library.component';
import { NgModule } from '@angular/core';
import { BookshelfHomeComponent } from './bookshelf/bookshelf-home/bookshelf-home.component';
import { BookDetailsComponent } from './bookshelf/book-details/book-details.component';
import { BookFormComponent } from './bookshelf/book-form/book-form.component';
import { BookshelfEditorComponent } from './bookshelf/bookshelf-editor/bookshelf-editor.component';
import { AuthComponent } from './shared/auth/auth.component';
import { AuthGuard } from './shared/auth/auth.guard';

const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: '/bookshelf',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'bookshelf',
    component: BookshelfComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: BookshelfHomeComponent,
      },
      {
        path: 'new',
        component: BookFormComponent,
      },
      {
        path: ':id',
        component: BookDetailsComponent,
      },
      {
        path: ':id/edit',
        component: BookshelfEditorComponent,
      },
    ],
  },
  {
    path: 'library',
    component: LibraryComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
