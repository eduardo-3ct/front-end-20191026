import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavBeerComponent } from './beer/fav-beer/fav-beer.component';
import { RouterModule } from '@angular/router';
import { BeerModule } from './beer/beer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BeerModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: FavBeerComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
