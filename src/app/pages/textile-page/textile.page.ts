import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Products } from 'src/app/constants/product.const';
import { Product } from 'src/app/models/product.model';
import { ResponsiveService } from 'src/app/services/responsive/responsive.service';

@Component({
	selector: 'app-textile-page',
	templateUrl: './textile.page.html',
	styleUrls: ['./textile.page.scss'],
})
export class TextilePage implements OnInit {
	products: Product[] = Products;

	categoriesMap: string[];
	constructor(private responsiveService: ResponsiveService, private router: Router) {}

	ngOnInit(): void {}

	navigateToDetail(id: string) {
		this.router.navigate(['/diensten/detail', id]);
	}
}
