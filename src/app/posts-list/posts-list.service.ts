import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../core/common.model';

@Injectable({
  providedIn: 'root'
})
export class PostsListService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  getPosts(): Observable<IPost[]> {
    return this._http.get<IPost[]>('https://jsonplaceholder.typicode.com/users/1/posts')
  }
}
