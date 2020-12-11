import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-category-card',
	templateUrl: './category-card.component.html',
	styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent implements OnInit {
	@Input() imagePath: string;
	@Input() description: string;
	@Input() backgroundColor: string;

	constructor() {}

	ngOnInit() {
		console.log('init...');
		console.log('bakcgourn', this.backgroundColor);
	}
}
