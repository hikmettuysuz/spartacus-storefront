import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagrabiCommonConfigModule } from './common/magrabi-config-common.module';
import { MagrabiProductDetailConfigModule } from './product/product-detail/product-detail-config.module';
import { MagrabiHomepageModule } from './homepage/magrabi-homepage.module';
import { MagrabiHomeModule } from '../pages/magrabi-home/magrabi-home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MagrabiCommonConfigModule,
    MagrabiProductDetailConfigModule,
    MagrabiHomepageModule,  ]
})
export class MagrabiAllConfigsModule { }
