import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericLinkModule, MediaModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { MagrabiHomeComponent } from './magrabi-home.component';



@NgModule({
  declarations: [MagrabiHomeComponent],
  imports: [
    CommonModule, RouterModule, GenericLinkModule, MediaModule]
})
export class MagrabiHomeModule { }
