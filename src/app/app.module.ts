import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Container
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.container';
import { AppComponent } from './app.component';
// Modules
import { ManualPortfolioModule } from './containers/manual-portfolio/manual-portfolio.module';
// Configuration
import { routes } from './app.routes';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    // Containers
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ManualPortfolioModule,
    RouterModule.forRoot(routes),
  ],
  providers: [{
    provide: APP_BASE_HREF, useValue: ''
  }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
