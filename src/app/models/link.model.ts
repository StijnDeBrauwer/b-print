import { Type } from '@angular/core';
import { Route } from '@angular/router';

export interface LinkModel extends Route {
	text: string;
	path: string;
	children?: LinkModel[];
	component?: Type<any>;
}
