import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent,
    ProductComponent]
})
export class ComponentsModule { }
