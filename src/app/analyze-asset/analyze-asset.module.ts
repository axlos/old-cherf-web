import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ComponentsModule } from './components';
import { AnalyzeAssetPageComponent } from './containers/analyze-asset-page';
import { AnalyzeAssetService } from './services/analyze-asset.service';
import { AnalyzeAssetEffects } from './effects/analyze-asset.effects';
import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: '', component: AnalyzeAssetPageComponent }
    ]),
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('analyzeAsset', reducers),
    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     */
    EffectsModule.forFeature([AnalyzeAssetEffects]),
  ],
  declarations: [
    AnalyzeAssetPageComponent
  ],
  providers: [
    AnalyzeAssetService
  ]
})
export class AnalyzeAssetModule {
}
