import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-contact-page',
	templateUrl: './contact.page.html',
	styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
	contactForm: FormGroup;
	disabledSubmitButton = true;
	optionsSelect: Array<any>;
	@ViewChild('form') formEl;

	constructor() {
		this.contactForm = new FormGroup({
			fromName: new FormControl('', Validators.required),
			fromEmail: new FormControl('', Validators.compose([Validators.required, Validators.email])),
			subject: new FormControl('', Validators.required),
			message: new FormControl('', Validators.required),
		});
	}

	ngOnInit(): void {}

	onSubmit() {
		let hasErrors = false;
		Object.keys(this.contactForm.controls).forEach((key) => {
			if (!this.contactForm.get(key).value || this.contactForm.get(key).value === '') {
				this.contactForm.get(key).markAsTouched();
				hasErrors = true;
			}
		});

		if (this.contactForm.errors || hasErrors) {
			return;
		}

		const regex = /\r?\n|\r/g;
		const currentText: string = String(this.contactForm.controls.message.value);
		const body = currentText.replace(regex, '%0D%0A');

		this.formEl.nativeElement.action =
			'mailto:bram@b-prints.be?subject=' + this.contactForm.controls.subject.value + '&body=' + body;
		this.formEl.nativeElement.submit();
	}
}
