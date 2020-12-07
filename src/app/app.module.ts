import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';

import { AppRoutingModule } from './modules/app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarMobileComponent } from './components/navigation/toolbar-mobile/toolbar-mobile.component';
import { ToolbarDesktopComponent } from './components/navigation/toolbar-desktop/toolbar-desktop.component';
import { HomePage } from './pages/home-page/home.page';
import { ProductsPage } from './pages/products-page/products.page';
import { PricePage } from './pages/price-page/price.page';
import { ContactPage } from './pages/contact-page/contact.page';
import { PageNotFound } from './pages/page-not-found/page-not-found.page';
import { FooterComponent } from './components/footer/footer.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ProductCardComponent } from './components/products/card/product-card.component';
import { ProductDetailDesktopComponent } from './components/products/desktop/detail/product-detail-desktop.component';
import { ProductListDesktopComponent } from './components/products/desktop/list/product-list-desktop.component';
import { ProductDetailMobileComponent } from './components/products/mobile/detail/product-detail-mobile.component';
import { ProductListMobileComponent } from './components/products/mobile/list/product-list-mobile.component';
import { ProductDetailPage } from './pages/product-detail-page/product-detail.page';
import { SlideshowModule } from 'ng-simple-slideshow';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
	declarations: [
		AppComponent,
		ToolbarMobileComponent,
		ToolbarDesktopComponent,
		HomePage,
		ProductsPage,
		PricePage,
		ContactPage,
		PageNotFound,
		FooterComponent,
		HamburgerComponent,
		ProductCardComponent,
		ProductDetailDesktopComponent,
		ProductListDesktopComponent,
		ProductDetailMobileComponent,
		ProductListMobileComponent,
		ProductDetailPage,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		NoopAnimationsModule,
		MatInputModule,
		MatCardModule,
		MatTooltipModule,
		SlideshowModule,
		NgImageFullscreenViewModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
