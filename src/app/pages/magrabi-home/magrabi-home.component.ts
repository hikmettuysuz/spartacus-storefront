import { Component, OnInit } from '@angular/core';
import { BannerComponent, CmsComponentData } from '@spartacus/storefront';
import { CmsBannerComponent } from '@spartacus/core';

@Component({
  selector: 'app-magrabi-home',
  templateUrl: './magrabi-home.component.html',
  styleUrls: ['./magrabi-home.component.scss']
})
export class MagrabiHomeComponent extends BannerComponent {

  constructor(public component: CmsComponentData<CmsBannerComponent>) {
    super(component);
    console.log(this.component)
  }

  ngOnInit(): void {
  }

}
