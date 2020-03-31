import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './page-componets/home-page/home-page.component';
import {NotFoundPageComponent} from './page-componets/not-found-page/not-found-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadChildren: () => import('./areas/user/user.module').then(module => module.UserModule)
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
