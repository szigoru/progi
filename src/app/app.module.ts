import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GyakComponent } from './gyak/gyak.component';
import { BevitelComponent } from './bevitel/bevitel.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateComponent } from './update/update.component'

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    FooterComponent,
    BevitelComponent,
    GyakComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
