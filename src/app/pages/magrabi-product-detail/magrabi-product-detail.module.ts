import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagrabiProductDetailComponent } from './magrabi-product-detail.component';
import { MagrabiProductToCartComponent } from './magrabi-product-to-cart/magrabi-product-to-cart.component';
import { I18nModule } from '@spartacus/core';
import { ItemCounterModule } from '@spartacus/storefront';



@NgModule({
  declarations: [MagrabiProductDetailComponent,
    MagrabiProductToCartComponent],
  imports: [
    CommonModule,
    I18nModule,
    ItemCounterModule
  ],
  entryComponents: [MagrabiProductDetailComponent,
    MagrabiProductToCartComponent]
})
export class MagrabiProductDetailModule { }
