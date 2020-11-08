import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ScrollDataService {
	private _isTransparent: boolean;
	transparentSubject: BehaviorSubject<boolean>;

	private _isHomepage: boolean;
	homePageSubject: BehaviorSubject<boolean>;

	constructor() {
		this._isTransparent = false;
		this.transparentSubject = new BehaviorSubject<boolean>(this._isTransparent);

		this._isHomepage = false;
		this.homePageSubject = new BehaviorSubject<boolean>(this._isHomepage);
	}

	get isTransparent() {
		return this._isTransparent;
	}

	set isTransparent(transparent: boolean) {
		this._isTransparent = transparent;
		this.transparentSubject.next(this._isTransparent);
	}

	get isHomepage() {
		return this._isHomepage;
	}

	set isHomepage(homepage: boolean) {
		this._isHomepage = homepage;
		this.homePageSubject.next(this._isHomepage);
	}
}
