import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/constants/product.const';
import { Product, SubProductType } from 'src/app/models/product.model';

@Component({
	selector: 'app-textile-page',
	templateUrl: './textile.page.html',
	styleUrls: ['./textile.page.scss'],
})
export class TextilePage implements OnInit {
	products: Product[] = Products;

	categoriesMap: string[];
	constructor(private router: Router) {}

	ngOnInit(): void {}

	filterProductsByType(productType: SubProductType): Product[] | undefined {
		return this.products.filter((product) => product && product.subType === productType) || [];
	}

	get hoodies(): Product[] {
		return this.filterProductsByType(SubProductType.Hoodie);
	}

	get sportPolos(): Product[] {
		return this.filterProductsByType(SubProductType.SportPolo);
	}

	get slimFitShirts(): Product[] {
		return this.filterProductsByType(SubProductType.ShirtSlim);
	}

	get basicShirts(): Product[] {
		return this.filterProductsByType(SubProductType.ShirtBasic);
	}

	get tShirts(): Product[] {
		return this.filterProductsByType(SubProductType.Shirt);
	}

	get sportShirt(): Product[] {
		return this.filterProductsByType(SubProductType.SportShirt);
	}

	get tops(): Product[] {
		return this.filterProductsByType(SubProductType.Top);
	}

	navigateToDetail(id: string) {
		this.router.navigate(['/diensten/detail', id]);
	}
}
