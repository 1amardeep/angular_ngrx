import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';




const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'counter',
    loadChildren : () => import('./component/counter/counter.module').then((m) => m.CounterModule)
  },
  {
    path:'post-list',
    loadChildren : () => import('./component/post/post.module').then((m) => m.PostModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
