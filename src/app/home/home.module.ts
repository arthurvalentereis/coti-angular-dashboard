import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
 
import { HomeRoutingModule } from './home-routing.module';
import { LoginComponent } from './components/login/login.component';
 
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
 


