import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { ReactiveFormsModule } from "@angular/forms";
import { HashLocationStrategy } from "@angular/common";
import {
  LocationStrategy,
  Location,
  PathLocationStrategy
} from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, NavBarComponent, HomeComponent, AboutComponent, ContactusComponent, TableComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
