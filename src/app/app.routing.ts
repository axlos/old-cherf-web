import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './core/containers/not-found-page';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/analyze-asset', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  {
    path: 'analyze-asset',
    loadChildren: './analyze-asset/analyze-asset.module#AnalyzeAssetModule',
  },
  // { path: 'automatic', component: AutomaticComponent },
  { path: '**', component: NotFoundPageComponent },
];
