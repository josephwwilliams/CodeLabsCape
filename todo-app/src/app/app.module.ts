import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './shared/todo/todo.component';
import { CreateComponent } from './shared/create/create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CloseIcon } from './shared/icons/close-icon.component';
import { CompleteIcon } from './shared/icons/complete-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CreateComponent,
    CloseIcon,
    CompleteIcon,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
