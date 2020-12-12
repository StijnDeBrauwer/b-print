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
import { ProductListComponent } from './components/products/list/product-list.component';
import { ProductDetailPage } from './pages/product-detail-page/product-detail.page';
import { SlideshowModule } from 'ng-simple-slideshow';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ProductDetailMobileComponent } from './components/products/mobile/detail/product-detail-mobile.component';
import { TextilePage } from './pages/textile-page/textile.page';
import { StickersPage } from './pages/stickers-page/stickers.page';
import { BachesAndFlagsPage } from './pages/baches-and-flags-page/baches-and-flags.page';
import { SpecialtiesPage } from './pages/specialties-page/specialties.page';
import { RealizationsPage } from './pages/realizations-page/realizations.page';
import { CategoryCardComponent } from './components/category-card/category-card.component';

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
		ProductDetailMobileComponent,
		ProductListComponent,
		ProductDetailPage,
		TextilePage,
		StickersPage,
		BachesAndFlagsPage,
		SpecialtiesPage,
		CategoryCardComponent,
		RealizationsPage,
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
