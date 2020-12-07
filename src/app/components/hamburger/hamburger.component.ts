import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { LinkModel } from 'src/app/models/link.model';

@Component({
	selector: 'app-hamburger',
	templateUrl: './hamburger.component.html',
	styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit {
	navOpen = false;
	subMenuOpen = false;

	@ViewChild('menu') menu: ElementRef;

	@Input() links: LinkModel[];
	chosenLink: LinkModel;

	constructor(private router: Router) {}

	ngOnInit(): void {}

	toggle(): void {
		this.navOpen = !this.navOpen;
	}

	toggleSubMenu(link: LinkModel): void {
		this.subMenuOpen = !this.subMenuOpen;
		if (this.subMenuOpen) {
			delete this.chosenLink;
		}

		this.chosenLink = link;
	}

	navigate(): void {
		this.subMenuOpen = false;
		this.navOpen = false;

		this.menu.nativeElement.checked = false;
	}

	navigateToRoute(route: LinkModel) {
		this.router.navigate([`/${route.path}`]);
		this.navigate();
	}
}
