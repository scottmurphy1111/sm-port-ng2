import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PortfolioService } from './components/portfolio/portfolio.service';
import { PortfolioModule } from './components/portfolio/portfolio.module';
import { CommonModule } from '@angular/common';
import { SlidingPanelComponent } from './components/sliding-panel/sliding-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SlidingPanelComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PortfolioModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
