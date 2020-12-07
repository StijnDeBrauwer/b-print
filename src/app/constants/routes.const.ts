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
				path: '',
			},
			{
				text: 'Belettering',
				path: '',
			},
			{
				text: 'Stikkers',
				path: '',
			},
			{
				text: 'Baches en vlaggen',
				path: '',
			},
			{
				text: 'Canvassen',
				path: '',
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
