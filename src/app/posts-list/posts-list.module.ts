import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PostsListComponent,
    children: [
      {
        path: ':id',
        loadChildren: () => import('./post/post.module').then(m => m.PostModule)
      }
    ]
  }
];

@NgModule({
  declarations: [
    PostsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PostsListModule { }
