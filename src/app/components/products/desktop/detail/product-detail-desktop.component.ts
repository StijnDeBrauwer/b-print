import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Product, ProductColor } from 'src/app/models/product.model';

@Component({
	selector: 'app-product-desktop-detail',
	templateUrl: './product-detail-desktop.component.html',
	styleUrls: ['./product-detail-desktop.component.scss'],
})
export class ProductDetailDesktopComponent implements OnInit {
	@ViewChild('slideshow', { static: false }) slideshow: any;
	@Input() product: Product;

	constructor() {}

	ngOnInit() {
		console.log('slideshow', this.slideshow);
	}

	get imageSources(): string[] {
		if (this.product.imagePaths.length < 2) {
			return [`../../../../../assets/images/products/${this.product.imagePaths[0]}`];
		}

		return this.product.imagePaths.map((img: string) => {
			const path: string = `../../../../../assets/images/products/${img}`;
			return path;
		});
	}

	swipeLeft() {
		this.slideshow.onSlide(-1); // previous slide
	}
	swipeRight() {
		this.slideshow.onSlide(1);
	}
}
