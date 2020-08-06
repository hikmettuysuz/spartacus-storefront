import { Component, OnInit } from '@angular/core';
import { TabParagraphContainerComponent, CmsComponentData } from '@spartacus/storefront';
import { CMSTabParagraphContainer, CmsService, WindowRef, ContentSlotComponentData } from '@spartacus/core';

@Component({
  selector: 'app-magrabi-product-tabs',
  templateUrl: './magrabi-product-tabs.component.html',
  styleUrls: ['./magrabi-product-tabs.component.scss']
})
export class MagrabiProductTabsComponent extends TabParagraphContainerComponent {

  public isMobileView = false;

  constructor(componentData: CmsComponentData<CMSTabParagraphContainer>, cmsService: CmsService, winRef: WindowRef) {
    super(componentData, cmsService, winRef);
    this.components$.subscribe(result => {
      console.log(result);
    });

    this.cmsService.getComponentData('TabPanelContainer').subscribe(console.log)
  }
  public dvntProductTabsWrapper: ContentSlotComponentData = {
    uid: 'TabPanelContainer',
    typeCode: 'CMSTabParagraphContainer',
    flexType: 'CMSTabParagraphContainer',
  };

}
