import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageHomeComponent } from './page/page-home/page-home.component';
import { LoginComponent } from './page/page-content/login/login.component';

const routes: Routes = [
  {
    path: 'home',
    component: PageHomeComponent,
    children: [
      { path: 'homepage', loadChildren: './page/page-content/home.module#HomeModule' }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
