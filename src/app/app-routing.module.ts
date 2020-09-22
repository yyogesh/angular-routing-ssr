import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module').then(x => x.ContactModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module').then(x => x.AboutModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/signin/signin.module').then(x => x.SigninModule)
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
