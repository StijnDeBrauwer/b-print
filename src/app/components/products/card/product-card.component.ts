import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
	@Input() product: Product;
	imgSrc: string;
	constructor() {}

	ngOnInit() {
		this.imgSrc = `./assets/images/products/${this.product.imagePaths[0]}`;
	}
}
