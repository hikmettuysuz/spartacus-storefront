import { Component, OnInit } from '@angular/core';
import { CurrentProductService, BreakpointService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { Product, ContentSlotComponentData } from '@spartacus/core';

@Component({
  selector: 'app-magrabi-product-detail',
  templateUrl: './magrabi-product-detail.component.html',
  styleUrls: ['./magrabi-product-detail.component.scss']
})
export class MagrabiProductDetailComponent {
  public product$: Observable<Product>;

  constructor(
    private currentProductService: CurrentProductService,
  ) {
    this.product$ = this.currentProductService.getProduct();

  }

  public productImagesComponent: ContentSlotComponentData = {
    uid: 'ProductImagesComponent',
    typeCode: 'ProductImagesComponent',
    flexType: 'ProductImagesComponent',
  };

}
