import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { LightboxComponent } from './lightbox/lightbox.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProductComponent,
    LightboxComponent,
    CardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ProductComponent,
    LightboxComponent,
    CardComponent]
})
export class ComponentsModule { }
