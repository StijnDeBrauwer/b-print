import { Component, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
	selector: 'app-product-mobile-detail',
	templateUrl: './product-detail-mobile.component.html',
	styleUrls: ['./product-detail-mobile.component.scss'],
})
export class ProductDetailMobileComponent implements OnInit {
	@ViewChild('slideshow', { static: false }) slideshow: any;
	@Input() product: Product;

	showFlag: boolean = false;
	selectedImageIndex: number = -1;
	constructor() {}

	ngOnInit() {}

	showLightbox(index: number) {
		this.selectedImageIndex = index;
		this.showFlag = true;
	}

	closeEventHandler() {
		this.showFlag = false;
	}

	get imageSources(): string[] {
		if (this.product.imagePaths.length < 2) {
			return [`./assets/images/products/${this.product.imagePaths[0]}`];
		}

		return this.product.imagePaths.map((img: string) => {
			const path: string = `./assets/images/products/${img}`;
			return path;
		});
	}

	get imageArray(): { image: string }[] {
		if (this.product.imagePaths.length < 2) {
			return [{ image: `./assets/images/products/${this.product.imagePaths[0]}` }];
		}

		return this.product.imagePaths.map((img: string) => {
			const path: { image: string } = { image: `./assets/images/products/${img}` };
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
