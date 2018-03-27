import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './core/containers/app.component';
import { ROUTES } from './app.routing';
import { CoreModule } from './core/core.module';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AutomaticComponent } from './automatic/automatic.component';
import { ClarityModule } from '@clr/angular';

@NgModule({
  // TODO: Temporal, remove later
  declarations: [
    HomeComponent,
    AboutComponent,
    AutomaticComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // TODO: Remove this module later
    ClarityModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    /**
     * EffectsModule.forRoot() is imported once in the root module and
     * sets up the effects class to be initialized immediately when the
     * application starts.
     *
     * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
     */
    // EffectsModule.forRoot([]),
    // Module import
    CoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
