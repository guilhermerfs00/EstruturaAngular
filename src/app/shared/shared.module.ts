import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';


@NgModule({
  declarations: [
    ServerErrorMessagesComponent, 
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ServerErrorMessagesComponent,
    // shared modules
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
