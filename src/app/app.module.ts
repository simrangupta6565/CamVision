import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutBodyComponent } from './about-body/about-body.component';
import { ContactComponent } from './contact/contact.component';
import { Component1Component } from './component1/component1.component';
import { LogInComponent } from './Footer/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AppRouterModule } from './routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import{ MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import{ MatIconModule } from '@angular/material/icon';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { DashboardComponent } from './dashboard/dashboard.component';
import{ MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule, MatDivider} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutBodyComponent,
    ContactComponent,
    Component1Component,
    LogInComponent,
    SignUpComponent,
    HomepageComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     MatDialogModule,
    AppRouterModule,
    MatTabsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
     BrowserAnimationsModule,
     ReactiveFormsModule,
     MDBBootstrapModule.forRoot(),
     MatSidenavModule,
     MatToolbarModule,
     MatListModule,
     MatMenuModule,
     MatDividerModule,
     MatSnackBarModule
    
  ],

  entryComponents:[
    SignUpComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
