import { Component, OnInit } from '@angular/core';
import { ProductImagesComponent, CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-magrabi-product-images',
  templateUrl: './magrabi-product-images.component.html',
  styleUrls: ['./magrabi-product-images.component.scss']
})
export class MagrabiProductImagesComponent extends ProductImagesComponent {

  constructor(currentProductService: CurrentProductService) {
    super(currentProductService);
  }

  ngOnInit(): void {
  }

}
