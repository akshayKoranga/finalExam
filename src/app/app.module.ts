import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { CylinderComponent , cylinderBookingDialog } from './cylinder/cylinder.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AboutCovidComponent } from './about-covid/about-covid.component';
import { SearchbookedComponent } from './searchbooked/searchbooked.component';

import { cylinderModule } from './cylinder/cylinder-module';

@NgModule({
  entryComponents: [CylinderComponent, cylinderBookingDialog],
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    CylinderComponent,
    cylinderBookingDialog,
    AboutusComponent,
    AboutCovidComponent,
    SearchbookedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,       
    ReactiveFormsModule,
    cylinderModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
