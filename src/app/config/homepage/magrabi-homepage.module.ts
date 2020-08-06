import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, CmsConfig } from '@spartacus/core';
import { MagrabiHomeComponent } from 'src/app/pages/magrabi-home/magrabi-home.component';
import { MagrabiHomeModule } from 'src/app/pages/magrabi-home/magrabi-home.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MagrabiHomeModule,
    ConfigModule.withConfig({
      layoutSlots: {
        LandingPage2Template: {
           slots: ['Section1'],
          // slots: ['MagrabiFooterSlot']
          },
    },
    } as CmsConfig),
    ConfigModule.withConfig({
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: MagrabiHomeComponent
        }
      }
    }as CmsConfig)
  ]
})
export class MagrabiHomepageModule { }
