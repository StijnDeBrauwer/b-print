import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/constants/product.const';
import { ResponsiveService } from 'src/app/services/responsive/responsive.service';

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

	get textileCard(): { imagePath: string; description: string; backgroundColor: string } {
		return {
			imagePath: './assets/images/products/cards/textile-card.png',
			description: 'Kledij',
			backgroundColor: 'f6f2ca',
		};
	}

	get bachesAndFlagsCard(): { imagePath: string; description: string; backgroundColor: string } {
		return {
			imagePath: './assets/images/products/cards/lettering-card.png',
			description: 'Opdruk en borduren',
			backgroundColor: '',
		};
	}

	get stichCard(): { imagePath: string; description: string; backgroundColor: string } {
		return {
			imagePath: './assets/images/products/cards/baches-card.png',
			description: 'Baches en vlaggen',
			backgroundColor: '',
		};
	}
}
