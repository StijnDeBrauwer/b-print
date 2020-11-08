import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ResponsiveService {
	public isMobileSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
	public screenWidth: string;

	constructor() {
		this.checkWidth();
	}

	onMobileChange(status: boolean) {
		this.isMobileSubject.next(status);
	}

	public checkWidth() {
		const width = window.innerWidth;
		if (width <= 768) {
			this.screenWidth = 'sm';
			this.onMobileChange(true);
		} else if (width > 768 && width <= 992) {
			this.screenWidth = 'md';
			this.onMobileChange(false);
		} else {
			this.screenWidth = 'lg';
			this.onMobileChange(false);
		}
	}
}
