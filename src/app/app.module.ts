import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent, DialogOverviewExampleDialog, DialogContentExampleDialog } from './table/table.component';
import { UnderConstComponent } from './under-const/under-const.component';
import { CylindersComponent } from './cylinders/cylinders.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
// import { MaterialModule } from './material.module';
import { DemoMaterialModule } from './table/material-module';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutCovidComponent } from './about-covid/about-covid.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  entryComponents: [TableComponent, DialogOverviewExampleDialog],
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    DialogOverviewExampleDialog,
    DialogContentExampleDialog,
    UnderConstComponent,
    CylindersComponent,
    SignInComponent,
    AboutCovidComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
