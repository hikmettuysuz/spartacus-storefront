import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActiveCartService, GlobalMessageService, GlobalMessageType } from '@spartacus/core';
import { AddToCartComponent, ModalService, CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-magrabi-product-to-cart',
  templateUrl: './magrabi-product-to-cart.component.html',
  styleUrls: ['./magrabi-product-to-cart.component.scss']
})
export class MagrabiProductToCartComponent extends AddToCartComponent {

  constructor(
    // tslint:disable-next-line: deprecation
    cartService: ActiveCartService,
    cd: ChangeDetectorRef,
    currentProductService: CurrentProductService,
    modalService: ModalService,
    private globalMessageService: GlobalMessageService,
  ) {
    super(modalService, currentProductService, cd, cartService );
  }

  public addToCart() {
    if (!this.productCode || this.quantity <= 0) {
      return;
    }

   // this.magrabiCartService.addEntryProduct();
    this.activeCartService
      .getEntry(this.productCode)
      .subscribe((entry) => {
        if (entry) {
          this.increment = true;
        }
        this.globalMessageService.add(
          'Product has been added to the cart!',
          GlobalMessageType.MSG_TYPE_CONFIRMATION
        );
        this.activeCartService.addEntry(this.productCode, this.quantity);
        this.increment = false;
      })
      .unsubscribe();
  }

}
