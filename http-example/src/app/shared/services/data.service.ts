import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(
      'https://openlibrary.org/search.json?title=the+lord+of+the+rings'
    );
  }
}
