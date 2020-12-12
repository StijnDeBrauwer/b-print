import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Products } from 'src/app/constants/product.const';
import { Product } from 'src/app/models/product.model';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
	@Output() onNavigateToDetail: EventEmitter<string> = new EventEmitter();
	@Input() products: Product[];

	constructor() {}

	ngOnInit() {}

	navigateToDetail(id: string) {
		this.onNavigateToDetail.emit(id);
	}
}
