import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagrabiProductDetailComponent } from './magrabi-product-detail.component';
import { MagrabiProductToCartComponent } from './magrabi-product-to-cart/magrabi-product-to-cart.component';
import { I18nModule } from '@spartacus/core';
import { ItemCounterModule, MediaModule, StarRatingModule, OutletModule, ComponentWrapperDirective } from '@spartacus/storefront';
import { MagrabiProductImagesComponent } from './magrabi-product-images/magrabi-product-images.component';
import { MagrabiProductIntroComponent } from './magrabi-product-intro/magrabi-product-intro.component';
import { MagrabiProductTabsComponent } from './magrabi-product-tabs/magrabi-product-tabs.component';
import { StorefrontMissingExportsModule } from 'src/app/storefront-missing-exports/storefront-missing-exports.module';



@NgModule({
  declarations: [MagrabiProductDetailComponent,
    MagrabiProductToCartComponent,
    MagrabiProductImagesComponent,
    MagrabiProductIntroComponent,
    MagrabiProductTabsComponent,
    ],
  imports: [
    CommonModule,
    I18nModule,
    ItemCounterModule,
    MediaModule,
    StarRatingModule,
    OutletModule,
    StorefrontMissingExportsModule
  ],
  entryComponents: [MagrabiProductDetailComponent,
    MagrabiProductToCartComponent,
    MagrabiProductImagesComponent,
    MagrabiProductIntroComponent,
    MagrabiProductTabsComponent],
})
export class MagrabiProductDetailModule { }
