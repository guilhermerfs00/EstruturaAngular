import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,  MatNativeDateModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-module';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
  declarations: [
    NavbarComponent, 
    SidebarComponent, 
    FooterComponent
  ],
  imports: [
    CoreRoutingModule,
    DemoMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  exports:[
    // shared modules
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    NavbarComponent,
    SidebarComponent, 
    FooterComponent
  ]
})
export class CoreModule { }
