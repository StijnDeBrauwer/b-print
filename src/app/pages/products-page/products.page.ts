import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponsiveService } from 'src/app/services/responsive/responsive.service';

@Component({
	selector: 'app-products-page',
	templateUrl: './products.page.html',
	styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
	isMobile: boolean;

	constructor(private responsiveService: ResponsiveService, private router: Router) {
		this.responsiveService.isMobileSubject.subscribe((isMobile) => {
			this.isMobile = isMobile;
		});
	}

	ngOnInit(): void {}

	navigateToDetail(id: string) {
		this.router.navigate(['/diensten', id]);
	}
}
