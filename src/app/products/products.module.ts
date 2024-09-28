
import { CommonModule } from '@angular/common';
import { ProductComponent } from './Components/product/product.component';
import { AllProductComponent } from './Components/all-product/all-product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    ProductComponent,
    AllProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ProductsModule { }
