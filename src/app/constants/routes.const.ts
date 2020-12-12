import { LinkModel } from 'src/app/models/link.model';
import { ContactPage } from '../pages/contact-page/contact.page';
import { PricePage } from '../pages/price-page/price.page';
import { ProductsPage } from '../pages/products-page/products.page';

export const AppRoutes: LinkModel[] = [
	{
		text: 'Diensten',
		path: 'diensten',
		component: ProductsPage,
		children: [
			{
				text: 'Textiel',
				path: 'textiel',
			},
			{
				text: 'Belettering',
				path: 'belettering',
			},
			{
				text: 'Stikkers',
				path: 'stickers',
			},
			{
				text: 'Baches en vlaggen',
				path: 'baches-en-vlaggen',
			},
			{
				text: "Promo's",
				path: 'promos',
			},
		],
	},
	{
		text: 'PrijsLijst',
		path: 'prijslijst',
		component: PricePage,
	},
	{
		text: 'Contact',
		path: 'contact',
		component: ContactPage,
	},
];
