import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { IPost } from 'src/app/core/common.model';
import { SeoService } from 'src/app/core/seo.service';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService, SeoService]
})
export class PostComponent implements OnInit {
  post$!: Observable<IPost>;
  constructor(
    private readonly _router: ActivatedRoute,
    private readonly _postService: PostService,
    private readonly _seoService: SeoService
    ) { }

  ngOnInit(): void {
    console.log('asdads')
    this.post$ = this._router.params.pipe(
      map(p => p['id']),
      switchMap(id => this._postService.getPost(id).pipe(
        tap(r => {
          this._seoService.setData({
            title: r.title,
            description: r.body
           });
        })
      ))
    )
  }



}
