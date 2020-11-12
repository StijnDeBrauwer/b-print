import { Component, OnInit, Input } from '@angular/core';
import { LinkModel } from 'src/app/models/link.model';

@Component({
	selector: 'app-hamburger',
	templateUrl: './hamburger.component.html',
	styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit {
	navOpen: boolean = false;
	@Input() links: LinkModel[];

	constructor() {}

	ngOnInit(): void {}

	toggle() {
		this.navOpen = !this.navOpen;
	}

	navigate() {}
}
