import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../components/products/card/product-card.component';
import { ProductDetailDesktopComponent } from '../components/products/desktop/detail/product-detail-desktop.component';
import { ProductListDesktopComponent } from '../components/products/desktop/list/product-list-desktop.component';
import { ProductDetailMobileComponent } from '../components/products/mobile/detail/product-detail-mobile.component';
import { ProductListMobileComponent } from '../components/products/mobile/list/product-list-mobile.component';

@NgModule({
	declarations: [
		ProductCardComponent,
		ProductDetailDesktopComponent,
		ProductListDesktopComponent,
		ProductDetailMobileComponent,
		ProductListMobileComponent,
	],
	exports: [
		ProductCardComponent,
		ProductDetailDesktopComponent,
		ProductListDesktopComponent,
		ProductDetailMobileComponent,
		ProductListMobileComponent,
	],
	imports: [CommonModule],
})
export class ProductModule {}
