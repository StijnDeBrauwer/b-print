import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from '../pages/home-page/home.page';
import { PageNotFound } from '../pages/page-not-found/page-not-found.page';
import { ProductsPage } from '../pages/products-page/products.page';
import { PricePage } from '../pages/price-page/price.page';
import { ContactPage } from '../pages/contact-page/contact.page';
import { ProductDetailPage } from '../pages/product-detail-page/product-detail.page';
import { TextilePage } from '../pages/textile-page/textile.page';
import { StickersPage } from '../pages/stickers-page/stickers.page';
import { BachesAndFlagsPage } from '../pages/baches-and-flags-page/baches-and-flags.page';
import { SpecialtiesPage } from '../pages/specialties-page/specialties.page';
import { RealizationsPage } from '../pages/realizations-page/realizations.page';

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
		path: 'diensten/detail/:id',
		component: ProductDetailPage,
	},
	{
		path: 'textiel',
		component: TextilePage,
	},
	{
		path: 'stickers',
		component: StickersPage,
	},
	{
		path: 'baches-en-vlaggen',
		component: BachesAndFlagsPage,
	},
	{
		path: 'specialiteiten',
		component: SpecialtiesPage,
	},
	{
		path: 'realisaties',
		component: RealizationsPage,
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
