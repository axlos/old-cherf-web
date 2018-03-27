import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from '@clr/angular';

import { ComponentsModule } from './components';
import { ManualPortfolioPageComponent } from './containers/manual-portfolio-page';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    ClarityModule,
    RouterModule.forChild([
      { path: '', component: ManualPortfolioPageComponent }
    ]),
    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    // StoreModule.forFeature('books', reducers),
    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     */
    // EffectsModule.forFeature([BookEffects, CollectionEffects]),
  ],
  declarations: [
    ManualPortfolioPageComponent
  ]
})
export class ManualPortfolioModule {
}
