import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-realizations-page',
	templateUrl: './realizations.page.html',
	styleUrls: ['./realizations.page.scss'],
})
export class RealizationsPage implements OnInit {
	showFlag: boolean = false;
	selectedImageIndex: number = -1;

	constructor() {}

	ngOnInit(): void {}

	openRealizations(index: number) {
		this.selectedImageIndex = index;
		this.showFlag = true;
	}

	get imageArray(): { image: string }[] {
		return [
			{ image: './assets/images/realizations/partners/0.jpg' },
			{ image: './assets/images/realizations/partners/1.jpg' },
			{ image: './assets/images/realizations/partners/2.jpg' },
			{ image: './assets/images/realizations/partners/3.jpg' },
			{ image: './assets/images/realizations/partners/4.jpg' },
			{ image: './assets/images/realizations/partners/5.jpg' },
			{ image: './assets/images/realizations/partners/6.jpg' },
			{ image: './assets/images/realizations/partners/7.jpg' },
			{ image: './assets/images/realizations/partners/8.jpg' },
			{ image: './assets/images/realizations/partners/9.jpg' },
		];
	}

	closeEventHandler() {
		this.showFlag = false;
	}
}
