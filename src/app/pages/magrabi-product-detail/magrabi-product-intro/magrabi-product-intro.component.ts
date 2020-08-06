import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductIntroComponent, CurrentProductService } from '@spartacus/storefront';
import { TranslationService, WindowRef } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-magrabi-product-intro',
  templateUrl: './magrabi-product-intro.component.html',
  styleUrls: ['./magrabi-product-intro.component.scss']
})
export class MagrabiProductIntroComponent extends ProductIntroComponent implements OnDestroy {

  subs = new Subscription();
  constructor(currentProductService: CurrentProductService, translationService: TranslationService, winRef: WindowRef) {
    super(currentProductService, translationService, winRef);
    
  }

  goToReviews() {
    this.subs = this.product$.pipe(take(1)).subscribe(result => {
      console.log(result);
      alert(JSON.stringify(result));
    })
  }

  ngOnDestroy () {

  }


}
