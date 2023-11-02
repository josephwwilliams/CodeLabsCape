import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Post {
  body: string;
  title: string;
  userId: number;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
