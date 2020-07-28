import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagrabiCommonConfigModule } from './common/magrabi-config-common.module';
import { MagrabiProductDetailConfigModule } from './product/product-detail/product-detail-config.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MagrabiCommonConfigModule,
    MagrabiProductDetailConfigModule
  ]
})
export class MagrabiAllConfigsModule { }
