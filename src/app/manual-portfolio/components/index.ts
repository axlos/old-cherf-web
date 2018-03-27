import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { ManualPortfolioComponent } from './manual-portfolio.component';

export const COMPONENTS = [
  ManualPortfolioComponent
];

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    RouterModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {
}
