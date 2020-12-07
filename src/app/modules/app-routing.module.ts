import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../pages/home-page/home.page';
import { PageNotFound } from '../pages/page-not-found/page-not-found.page';
import { ProductsPage } from '../pages/products-page/products.page';
import { PricePage } from '../pages/price-page/price.page';
import { ContactPage } from '../pages/contact-page/contact.page';
import { ProductDetailPage } from '../pages/product-detail-page/product-detail.page';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		component: HomePage,
	},
	{
		path: 'diensten',
		component: ProductsPage,
	},
	{
		path: 'diensten/:id',
		component: ProductDetailPage,
	},
	{
		path: 'prijslijst',
		component: PricePage,
	},
	{
		path: 'contact',
		component: ContactPage,
	},
	{
		path: '**',
		component: PageNotFound,
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
