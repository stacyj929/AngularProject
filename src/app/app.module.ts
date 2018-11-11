import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DishService } from './services/dish.service'
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatGridListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatSelectModule,
  MatInputModule
 } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ItemdetailComponent } from './itemdetail/itemdetail.component';
import { UpperBarComponent } from './upper-bar/upper-bar.component';
import { LowerBarComponent } from './lower-bar/lower-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DealsComponent } from './deals/deals.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemdetailComponent,
    UpperBarComponent,
    LowerBarComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    DealsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    FlexLayoutModule,
    MatGridListModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    MatSelectModule,  
  ],
  providers: [DishService],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent
],

})
export class AppModule { }
