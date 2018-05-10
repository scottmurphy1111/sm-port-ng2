import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService } from './portfolio.service';
import { PortfolioComponent } from './portfolio.component';
import { VertNavComponent } from './vert-nav/vert-nav.component';
import { VertNavItemDirective } from './vert-nav/vert-nav-item.directive';
import { OnScrollDirective } from '../on-scroll/on-scroll.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PortfolioComponent,
    VertNavComponent,
    VertNavItemDirective,
    OnScrollDirective
  ],
  providers: [
    PortfolioService
  ]
})
export class PortfolioModule { }
