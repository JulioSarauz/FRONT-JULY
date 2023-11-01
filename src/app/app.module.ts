import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { BannerComponent } from './genericos/banner/banner.component';
import { CardComponent } from './genericos/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    BannerComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
