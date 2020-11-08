import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResponsiveService } from './services/responsive/responsive.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
	@HostListener('window:resize', ['$event'])
	checkSize(event) {
		this.onResize();
	}

	private _responsiveSubscription: Subscription;
	isMobile: boolean;

	constructor(private responsiveService: ResponsiveService) {
		this._responsiveSubscription = this.responsiveService.isMobileSubject.subscribe((isMobile) => {
			console.log(isMobile);
			this.isMobile = isMobile;
		});
		this.onResize();
	}

	ngOnInit() {
		this.onResize();
	}

	ngOnDestroy() {
		if (this._responsiveSubscription) {
			this._responsiveSubscription.unsubscribe();
		}
	}

	onResize() {
		this.responsiveService.checkWidth();
	}
}
