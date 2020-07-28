import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  GlobalMessageComponentModule,
  OutletModule,
  OutletRefModule,
  PwaModule,
  PageLayoutModule,
  SeoModule,
  PageSlotModule,
  PageComponentModule,
  KeyboardFocusModule,
  AnonymousConsentsDialogModule,
  SkipLinkModule,
} from '@spartacus/storefront';
import {
  AnonymousConsentsModule,
  FeaturesConfigModule,
  UrlModule,
} from '@spartacus/core';

@NgModule({
  imports: [
    AnonymousConsentsModule,
    CommonModule,
    FeaturesConfigModule,
    GlobalMessageComponentModule,
    OutletModule,
    OutletRefModule,
    PageComponentModule,
    PageLayoutModule,
    PageSlotModule,
    PwaModule,
    RouterModule,
    SeoModule,
    UrlModule,
    AnonymousConsentsDialogModule,
    FeaturesConfigModule,
    SkipLinkModule,
    KeyboardFocusModule,
   ],
  exports: [
    AnonymousConsentsModule,
    FeaturesConfigModule,
    GlobalMessageComponentModule,
    OutletModule,
    OutletRefModule,
    PageComponentModule,
    PageLayoutModule,
    PageSlotModule,
    PwaModule,
    RouterModule,
    SeoModule,
    UrlModule,
    AnonymousConsentsDialogModule,
    FeaturesConfigModule,
    SkipLinkModule,
    KeyboardFocusModule,
    ],
})
export class StorefrontMissingExportsModule {}
