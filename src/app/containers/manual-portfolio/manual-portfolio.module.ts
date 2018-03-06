import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Container
import { ManualPortfolioComponent } from './manual-portfolio.container';

// Configuration
import { routes } from './manual-portfolio.routes';

@NgModule({
  declarations: [
    ManualPortfolioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
  ],
  providers: [
  ],
})

export class ManualPortfolioModule {
}
