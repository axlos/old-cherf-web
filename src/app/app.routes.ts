import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.container';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
