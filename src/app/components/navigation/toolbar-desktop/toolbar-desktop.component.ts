import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'src/app/constants/routes.const';
import { LinkModel } from 'src/app/models/link.model';
import { ScrollDataService } from 'src/app/services/scroll/scroll.service';

@Component({
	selector: 'app-toolbar-desktop',
	templateUrl: './toolbar-desktop.component.html',
	styleUrls: ['./toolbar-desktop.component.scss'],
})
export class ToolbarDesktopComponent implements OnInit {
	// whether the submenu has to be open or not
	subMenuOpen = false;
	// is tracked because we have to know which link the user choose to close the submenu
	chosenLink: LinkModel;
	// is an array of linkes defined in /src/app/modules/router-paths
	links: Array<LinkModel> = [];
	// whether the nav should be transparent
	isTransparent: boolean;
	// the path to the logo (we have a white or a colored logo)
	logoPath: string = '../../../../assets/images/logo_green.png';

	isTransparentSubject: any;
	isHomepageSubject: any;

	constructor(private scrollService: ScrollDataService) {}

	ngOnInit() {
		this.initRoutes();
	}

	destroySubscribers() {
		if (this.isTransparentSubject) {
			this.isTransparentSubject.unsubscribe();
		}
		if (this.isHomepageSubject) {
			this.isHomepageSubject.unsubscribe();
		}
	}

	ngOnDestroy() {
		this.destroySubscribers();
	}

	initRoutes() {
		this.links = AppRoutes;
	}

	navigate() {
		this.subMenuOpen = false;
		this.chosenLink = null;
	}

	toggleSubMenu(link: LinkModel) {
		this.scrollService.isTransparent = false;
		// if the chosen link is the current link (this means the user has clicked twice on the link) we have to close the submenu
		if (this.chosenLink === link) {
			this.subMenuOpen = false;
			this.chosenLink = null;
		} else {
			this.subMenuOpen = !!link.children;
			this.chosenLink = link;
		}
	}
}
