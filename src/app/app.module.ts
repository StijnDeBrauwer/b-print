import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
