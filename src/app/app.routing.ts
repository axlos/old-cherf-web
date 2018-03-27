import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './core/containers/not-found-page';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/manual-portfolio', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  {
    path: 'manual-portfolio',
    loadChildren: './manual-portfolio/manual-portfolio.module#ManualPortfolioModule',
  },
  // { path: 'automatic', component: AutomaticComponent },
  { path: '**', component: NotFoundPageComponent },
];
