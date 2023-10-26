import { Component } from '@angular/core';
import { BookshelfService } from '../services/bookshelf.service';
import { Subscription } from '@supabase/supabase-js';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

interface Notification {
  message: string;
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent {
  notification: Notification;

  constructor(private bookshelfService: BookshelfService) {}

  ngOnInit() {
    this.bookshelfService.bookAdded.subscribe((book) => {
      this.notification = {
        message: book.title,
      };
    });
  }
}
