import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'post',
  loadChildren: () => import('./posts-list/posts-list.module').then(m => m.PostsListModule)
},
{ path: '',   redirectTo: '/post', pathMatch: 'full' },
{
  path: '*',
  redirectTo: '/post'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
