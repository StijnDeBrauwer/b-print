export interface Product {
	articleNumber: string;
	displayName: string;
	description: string;
	imagePaths: string[];
	price?: number;
	type: ProductType;
	subType?: SubProductType;
	sizes?: ProductSizes[];
	composition?: string[];
	colors?: ProductColor[];
	gender: Gender;
}

export interface ProductColor {
	hex: string;
	name: string;
}

export enum Gender {
	Male = 'Mannen',
	Female = 'Vrouwen',
	UniSex = 'Gender neutraal',
	Kids = 'Kinderen',
}

export enum ProductType {
	Textile = 'Textiel',
	Lettering = 'Belettering',
	Stickers = 'Stickers',
	BachesAndFlags = 'Bachen en vlaggen',
	Promos = 'Promos',
}

export enum SubProductType {
	Hoodie = 'Hoodies',
	SportPolo = "Sport Polo's",
	ShirtSlim = 'Shirt Slim Fit',
	ShirtBasic = 'Shirt Basic',
	Shirt = 'T-Shirt',
	SportShirt = 'Sport Shirts',
	Top = 'Topjes',
}

export enum ProductSizes {
	XS = 'XS',
	S = 'S',
	M = 'M',
	L = 'L',
	XL = 'XL',
	XXL = '2XL',
	XXXL = '3XL',
	XXXXL = ' 4XL',
	XXXXXL = '5XL',
	K104 = '104',
	K116 = '116',
	K128 = '128',
	K140 = '140',
	K152 = '152',
	K164 = '164',
}
