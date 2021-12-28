import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPost } from 'src/app/core/common.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private readonly _http: HttpClient) { }

  getPost(id: string): Observable<IPost> {
    return this._http.get<IPost[]>(`https://jsonplaceholder.typicode.com/users/1/posts?id=${id}`).pipe(
      map(r => r[0])
    );
  }
}
