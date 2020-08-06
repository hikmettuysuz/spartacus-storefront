import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsStructureConfig, ContentSlotComponentData, CmsConfig, ConfigModule, CmsPageSlotsConfig } from '@spartacus/core';
import { LayoutConfig } from '@spartacus/storefront';
import { MagrabiProductDetailModule } from 'src/app/pages/magrabi-product-detail/magrabi-product-detail.module';
import { MagrabiProductDetailComponent } from 'src/app/pages/magrabi-product-detail/magrabi-product-detail.component';
import { MagrabiProductImagesComponent } from 'src/app/pages/magrabi-product-detail/magrabi-product-images/magrabi-product-images.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MagrabiProductDetailModule,
    ConfigModule.withConfig({
      layoutSlots: {
        ProductDetailsPageTemplate: {
          slots: ['MagrabiProductDetails', 'UpSelling'],
        },
      },
    } as LayoutConfig),
    ConfigModule.withConfigFactory(productDetailsCmsStructureConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        MagrabiProductDetailsComponent: {
          component: MagrabiProductDetailComponent,
        },
        ProductImagesComponent: {
           component: MagrabiProductImagesComponent,
         },
        // ProductReferencesComponent: {
        //   component: DvntProductUpSellingReferencesComponent,
        // },
      },
    } as CmsConfig),
  ],
})
export class MagrabiProductDetailConfigModule { }


export const staticComponents: {
  [key: string]: ContentSlotComponentData | any;
} = {
  MagrabiProductDetailsComponent: {
    typeCode: 'MagrabiProductDetailsComponent',
    flexType: 'MagrabiProductDetailsComponent',
    uid: 'MagrabiProductDetailsComponent',
  },
};

const cmsPageSlotConfig: CmsPageSlotsConfig = {
  MagrabiProductDetails: {
    componentIds: ['MagrabiProductDetailsComponent'],
  },
};

export function productDetailsCmsStructureConfig(): CmsStructureConfig {
  return {
    cmsStructure: {
      components: {
        ...staticComponents,
      },
      slots: {
        ...cmsPageSlotConfig,
      },
    },
  };
}
