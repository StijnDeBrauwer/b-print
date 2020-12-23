import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-products-page',
	templateUrl: './products.page.html',
	styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	navigateToDetail(id: string) {
		this.router.navigate(['/diensten/detail', id]);
	}

	navigateToTextilePage() {
		this.router.navigate(['/textiel']);
	}

	navigateToBaches() {
		this.router.navigate(['/baches-en-vlaggen']);
	}

	navigateToPrintingPage() {
		this.router.navigate(['/bedrukkingen']);
	}

	navigateToStickers() {
		this.router.navigate(['/stickers']);
	}

	navigateToSpecials() {
		this.router.navigate(['/promos']);
	}

	get textileCard(): { imagePath: string; description: string; backgroundColor: string } {
		return {
			imagePath: './assets/images/products/cards/textile-card.png',
			description: 'Kledij',
			backgroundColor: 'f6f2ca',
		};
	}

	get printingCard(): { imagePath: string; description: string; backgroundColor: string } {
		return {
			imagePath: './assets/images/products/cards/lettering-card.png',
			description: 'Bedrukkingen',
			backgroundColor: '',
		};
	}

	get bachesAndFlagsCard(): { imagePath: string; description: string; backgroundColor: string } {
		return {
			imagePath: './assets/images/products/cards/baches-card.png',
			description: 'Baches en vlaggen',
			backgroundColor: '',
		};
	}
}
