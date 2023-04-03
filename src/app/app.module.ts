import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
