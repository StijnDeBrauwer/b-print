import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../pages/home-page/home.page';
import { PageNotFound } from '../pages/page-not-found/page-not-found.page';
import { PricePage } from '../pages/price-page/price.page';
import { ProductsPage } from '../pages/products-page/products.page';
import { ContactPage } from '../pages/contact-page/contact.page';

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
