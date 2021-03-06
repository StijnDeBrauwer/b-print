import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'src/app/constants/routes.const';
import { LinkModel } from 'src/app/models/link.model';

@Component({
	selector: 'app-toolbar-mobile',
	templateUrl: './toolbar-mobile.component.html',
	styleUrls: ['./toolbar-mobile.component.scss'],
})
export class ToolbarMobileComponent implements OnInit {
	navOpen = false;
	subMenuOpen = false;
	links: Array<LinkModel> = [];
	logoPath: string;
	chosenLink: LinkModel;

	constructor() {
		this.initRoutes();
		this.logoPath = './assets/images/logo_green.png';
	}

	ngOnInit() {}

	ngOnDestroy() {}

	initRoutes() {
		this.links = AppRoutes;
	}

	navigate() {
		this.navOpen = false;
		this.subMenuOpen = false;
	}

	toggle() {
		this.navOpen = !this.navOpen;
		this.subMenuOpen = false;
	}

	toggleSubMenu(link: LinkModel) {
		this.chosenLink = link;
		this.subMenuOpen = !this.subMenuOpen;
	}
}
