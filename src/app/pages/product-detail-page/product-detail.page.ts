import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/constants/product.const';
import { Product } from 'src/app/models/product.model';
import { ResponsiveService } from 'src/app/services/responsive/responsive.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.page.html',
	styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit, OnDestroy {
	isMobile: boolean;
	product: Product;
	private sub: any;

	constructor(private responsiveService: ResponsiveService, private route: ActivatedRoute) {
		this.responsiveService.isMobileSubject.subscribe((isMobile) => {
			this.isMobile = isMobile;
		});
	}

	ngOnInit() {
		this.sub = this.route.params.subscribe((params) => {
			this.product = Products.find((p) => p.articleNumber === params['id']);
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
