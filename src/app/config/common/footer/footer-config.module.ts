import { LayoutConfig } from '@spartacus/storefront';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, CmsStructureConfig, CmsConfig, ContentSlotComponentData, CmsPageSlotsConfig } from '@spartacus/core';
import { MagrabiFooterComponent } from 'src/app/components/footer/magrabi-footer/magrabi-footer.component';
import { MagrabiFooterModule } from 'src/app/components/footer/magrabi-footer/magrabi-footer.module';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        MagrabiFooterModule,
        ConfigModule.withConfig({
            layoutSlots: {
                footer: {
                   slots: ['Footer'],
                  // slots: ['MagrabiFooterSlot']
                  },
            }
        }as LayoutConfig),
        ConfigModule.withConfigFactory(cmsStructureConfig),
        ConfigModule.withConfig({
            cmsComponents: {
                FooterNavigationComponent: {
                    component: MagrabiFooterComponent
                },
              //   MagrabiFooterComponent: {
              //     component: MagrabiFooterComponent
              // }
            }
        } as CmsConfig),

    ],
})

export class MagrabiFooterConfigModule{}


export const staticComponents: {
    [key: string]: ContentSlotComponentData | any;
  } = {
    MagrabiFooterComponent: {
      typeCode: 'MagrabiFooterComponent',
      flexType: 'MagrabiFooterComponent',
      uid: 'MagrabiFooterComponent',
    }
  };

const cmsPageSlotConfig: CmsPageSlotsConfig = {
    MagrabiFooterSlot: {
      componentIds: ['MagrabiFooterComponent'],
    }
  };

export function cmsStructureConfig(): CmsStructureConfig {
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
