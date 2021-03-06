import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PotionsListComponent } from './entities/potions/potions-list/potions-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PotionsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [PotionsListComponent]
})
export class AppModule { }
