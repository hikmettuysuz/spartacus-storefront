import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagrabiFooterComponent } from './magrabi-footer.component';
import { NavigationModule, GenericLinkModule, FooterNavigationModule, IconModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { I18nModule } from '@spartacus/core';



@NgModule({
  declarations: [MagrabiFooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    GenericLinkModule,
    I18nModule,
  ],
  entryComponents: [MagrabiFooterComponent]
})
export class MagrabiFooterModule { }
