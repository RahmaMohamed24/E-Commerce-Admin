import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './Components/select/select.component';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { HeaderComponent } from './Components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    SelectComponent,
    SpinnerComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[HeaderComponent,SpinnerComponent,SelectComponent]
})
export class SharedModule { }
