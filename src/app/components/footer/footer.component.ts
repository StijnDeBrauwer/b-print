import { Component, OnInit } from '@angular/core';
import { ResponsiveService } from 'src/app/services/responsive/responsive.service';
import { routes } from '../navigation/navigation.const';
import { LinkModel } from 'src/app/models/link.model';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	isMobile: boolean;
	links: Array<LinkModel> = routes;
	constructor(private responsiveService: ResponsiveService) {
		this.responsiveService.checkWidth();
		this.responsiveService.isMobileSubject.subscribe((isMobile) => {
			this.isMobile = isMobile;
		});
	}

	ngOnInit() {
		this.responsiveService.checkWidth();
	}
}
