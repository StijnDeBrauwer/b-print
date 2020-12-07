import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/constants/product.const';
import { Product } from 'src/app/models/product.model';

@Component({
	selector: 'app-product-desktop-list',
	templateUrl: './product-list-desktop.component.html',
	styleUrls: ['./product-list-desktop.component.scss'],
})
export class ProductListDesktopComponent implements OnInit {
	@Output() onNavigateToDetail: EventEmitter<string> = new EventEmitter();
	products: Product[] = Products;

	constructor() {}

	ngOnInit() {}

	navigateToDetail(id: string) {
		console.log('pressed', id);
		this.onNavigateToDetail.emit(id);
	}
}
