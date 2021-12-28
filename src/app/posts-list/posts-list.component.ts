import { Component, OnInit } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { PostsListService } from './posts-list.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  providers: [PostsListService, SeoService]
})
export class PostsListComponent implements OnInit {
  post$ = this._postsListService.getPosts(); 
  constructor(
    private readonly _postsListService: PostsListService,
    private readonly _seoService: SeoService
  ) { }

  ngOnInit(): void {
    this._seoService.setData({
      title: 'posts',
      description: 'list of posts'
     });
  }

}
