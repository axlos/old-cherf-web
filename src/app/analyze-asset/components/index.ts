import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { AnalyzeAssetComponent } from './analyze-asset.component';

export const COMPONENTS = [
  AnalyzeAssetComponent
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
