import { Gender, Product, ProductSizes, ProductType, SubProductType } from '../models/product.model';

export const Products: Product[] = [
	{
		articleNumber: 'F421',
		displayName: 'Classic Hooded Sweat',
		description:
			'Deze stijlvolle hoodie heeft een dubbellaagse capuchon met trekkoord in dezelfde kleur. Het voorziet comfort en tegelijkertijd ook de nodige warmte.  Een zakje voorin is eveneens inbegrepen. Ideaal om te dragen tijdens buitenactiviteiten of om jezelf gewoon wat op te warmen!',
		imagePaths: ['F421/hoodie.jpg', 'F421/hoodie_front.jpg', 'F421/hoodie_back.jpg', 'F421/hoodie_side.jpg'],
		type: ProductType.Textile,
		sizes: [
			ProductSizes.S,
			ProductSizes.M,
			ProductSizes.L,
			ProductSizes.XL,
			ProductSizes.XXL,
			ProductSizes.XXXL,
			ProductSizes.XXXXL,
			ProductSizes.XXXXXL,
		],
		composition: ['100% Katoen'],
		colors: [
			{
				hex: '#0076AD',
				name: 'Azure Blue',
			},
			{
				hex: '#120F14',
				name: 'Black',
			},
			{
				hex: '#1E4026',
				name: 'Bottle Green',
			},
			{
				hex: '#77002F',
				name: 'Burgundy',
			},
			{
				hex: '#563D29',
				name: 'Chocolate',
			},
			{
				hex: '#63673F',
				name: 'Classic Olive',
			},
			{
				hex: '#000121',
				name: 'Deep Navy',
			},
			{
				hex: '#E50D89',
				name: 'Fuchsia',
			},
			{
				hex: '#00965E',
				name: 'Heather Green',
			},
			{
				hex: '#1F2A44',
				name: 'Heather Navy',
			},
			{
				hex: '#B04A5A',
				name: 'Heather Red',
			},
			{
				hex: '#0047BB',
				name: 'Heather Royal',
			},
			{
				hex: '#00A056',
				name: 'Kelly Green',
			},
			{
				hex: '#554B47',
				name: 'Light Graphite',
			},
			{
				hex: '#F0A5C7',
				name: 'Light Pink',
			},
			{
				hex: '#1E4026',
				name: 'Navy',
			},
			{
				hex: '#EF7E18',
				name: 'Orange',
			},
			{
				hex: '#431279',
				name: 'Purple',
			},
			{
				hex: '#E61709',
				name: 'Red',
			},
			{
				hex: '#004D9F',
				name: 'Royal Blue',
			},
			{
				hex: '#82CDF2',
				name: 'Sky Blue',
			},
			{
				hex: '#F9BA05',
				name: 'Sun Flower',
			},
			{
				hex: '#FFFFFF',
				name: 'White',
			},
		],
		gender: Gender.UniSex,
		subType: SubProductType.Hoodie,
	},
	{
		articleNumber: 'BCWU02K',
		displayName: 'KING Hooded Sweat',
		description:
			'Deze comfortabele Regular fit hoodie heeft een glad, zacht en gelijkmatig oppervlak. De binnenzijde bestaat uit geborsteld fleece waardoor het u nog meer comfort biedt! Deze hoodie is ideaal voor koude dagen, en voor activiteiten waar ultiem comfort nodig is!',
		imagePaths: ['BCWU02K/hoodie.jpg', 'BCWU02K/hoodie_front.jpg', 'BCWU02K/hoodie_back.jpg'],
		type: ProductType.Textile,
		sizes: [
			ProductSizes.XS,
			ProductSizes.S,
			ProductSizes.M,
			ProductSizes.L,
			ProductSizes.XL,
			ProductSizes.XXL,
			ProductSizes.XXXL,
			ProductSizes.XXXXL,
		],
		composition: ['80% Katoen', ' 20% Polyester'],
		colors: [
			{
				hex: '#C1D3C7',
				name: 'Aqua Green',
			},
			{
				hex: '#433F42',
				name: 'Asphalt',
			},
			{
				hex: '#070508',
				name: 'Black Pure',
			},
			{
				hex: '#1E4026',
				name: 'Bottle Green',
			},
			{
				hex: '#5C2333',
				name: 'Dark Cherry',
			},
			{
				hex: '#D8D2C0',
				name: 'Grey Fog',
			},
			{
				hex: '#b1b3b4',
				name: 'Heather Grey',
			},
			{
				hex: '#7F8080',
				name: 'Heather Mid Grey',
			},
			{
				hex: '#4c4b30',
				name: 'Khaki',
			},
			{
				hex: '#DC1A62',
				name: 'Magenta Pink',
			},
			{
				hex: '#101145',
				name: 'Navy Blue',
			},
			{
				hex: '#5F7788',
				name: 'Nordic Blue',
			},
			{
				hex: '#EB5D0F',
				name: 'Pure Orange',
			},
			{
				hex: '#DDE7E9',
				name: 'Pure Sky',
			},
			{
				hex: '#3B1D66',
				name: 'Radiant Purple',
			},
			{
				hex: '#db001b',
				name: 'Red',
			},
			{
				hex: '#13377D',
				name: 'Royal',
			},
			{
				hex: '#F0D1C4',
				name: 'Soft Rose',
			},
			{
				hex: '#FFFFFF',
				name: 'White',
			},
			{
				hex: '#FFDF51',
				name: 'Yellow Fizz',
			},
		],
		gender: Gender.UniSex,
		subType: SubProductType.Hoodie,
	},
	{
		articleNumber: 'E4099',
		displayName: "Men's Premium-T Longsleeve",
		description:
			'Dit stijlvol shirt met lange mouwen is gemaakt uit gekamd katoen. Hij heeft een elastane ribgebreide kraag. Het kan gedragen worden in vrijetijd maar voorziet alle comfort',
		imagePaths: ['E4099/shirt.jpg', 'E4099/shirt_front.jpg', 'E4099/shirt_back.jpg', 'E4099/shirt_side.jpg'],
		type: ProductType.Textile,
		sizes: [
			ProductSizes.S,
			ProductSizes.M,
			ProductSizes.L,
			ProductSizes.XL,
			ProductSizes.XXL,
			ProductSizes.XXXL,
			ProductSizes.XXXXL,
			ProductSizes.XXXXXL,
		],
		composition: ['100% Katoen'],
		colors: [
			{
				hex: '#00060A',
				name: 'Black',
			},
			{
				hex: '#C3031F',
				name: 'Fire Red',
			},
			{
				hex: '#1E4026',
				name: 'Navy',
			},
			{
				hex: '#77002F',
				name: 'Steel Grey',
			},
			{
				hex: '#FFFFFF',
				name: 'White',
			},
		],
		gender: Gender.Male,
		subType: SubProductType.Shirt,
	},
	{
		articleNumber: 'E3081',
		displayName: "Men's Slim Fit-T",
		description:
			'Deze Single Jersey voor mannen heeft een zachte pasvorm. Ideaal om te dragen tijdens verschillende activiteiten. Het voorziet een ronde hals en is afgewerkt in zijde naden.',
		imagePaths: [
			'E3081/shirt-short-sleeves.jpg',
			'E3081/shirt-short-sleeves_front.jpg',
			'E3081/shirt-short-sleeves_back.jpg',
			'E3081/shirt-short-sleeves_side.jpg',
		],
		type: ProductType.Textile,
		sizes: [ProductSizes.S, ProductSizes.M, ProductSizes.L, ProductSizes.XL, ProductSizes.XXL],
		composition: ['95% Katoen', '5% Elastaan (Sports Grey: 81% Katoen / 14% Viscose / 5% Elastaan)'],
		colors: [
			{
				hex: '#00060A',
				name: 'Black',
			},
			{
				hex: '#A5A7A9',
				name: 'Sports Grey',
			},
			{
				hex: '#FFFFFF',
				name: 'White',
			},
		],
		gender: Gender.Male,
		subType: SubProductType.ShirtSlim,
	},
	{
		articleNumber: 'E3085',
		displayName: "Women's Slim Fit-T",
		description:
			'Deze Single Jersey voor vrouwen heeft een zachte pasvorm. Ideaal om te dragen tijdens verschillende activiteiten. Het voorziet een ronde hals en is afgewerkt in zijde naden.',
		imagePaths: [
			'E3085/shirt-women-short.jpg',
			'E3085/shirt-women-short_front.jpg',
			'E3085/shirt-women-short_back.jpg',
			'E3085/shirt-women-short_side.jpg',
		],
		type: ProductType.Textile,
		sizes: [ProductSizes.S, ProductSizes.M, ProductSizes.L, ProductSizes.XL, ProductSizes.XXL],
		composition: ['95% Katoen', '5% Elastaan (Sports Grey: 81% Katoen / 14% Viscose / 5% Elastaan)'],
		colors: [
			{
				hex: '#00060A',
				name: 'Black',
			},
			{
				hex: '#A5A7A9',
				name: 'Sports Grey',
			},
			{
				hex: '#FFFFFF',
				name: 'White',
			},
		],
		gender: Gender.Female,
		subType: SubProductType.ShirtSlim,
	},
	{
		articleNumber: 'E1000',
		displayName: 'Basic-T',
		description:
			'Deze buisvormige Single Jersey (Regular Fit) heeft een versterkte nekband en een elastane ribgebreide kraag.',
		imagePaths: [
			'E1000/shirt-basic.jpg',
			'E1000/shirt-basic_front.jpg',
			'E1000/shirt-basic_back.jpg',
			'E1000/shirt-basic_side.jpg',
		],
		type: ProductType.Textile,
		sizes: [ProductSizes.S, ProductSizes.M, ProductSizes.L, ProductSizes.XL, ProductSizes.XXL],
		composition: ['100% Katoen'],
		colors: [
			{
				hex: '#00060A',
				name: 'Black',
			},
			{
				hex: '#C3031F',
				name: 'Fire Red',
			},
			{
				hex: '#FEE00C',
				name: 'Gold',
			},
			{
				hex: '#99C230',
				name: 'Lime Green',
			},
			{
				hex: '#1E4026',
				name: 'Navy',
			},
			{
				hex: '#EF7E18',
				name: 'Orange',
			},
			{
				hex: '#1A4C8B',
				name: 'Royal',
			},
			{
				hex: '#FFFFFF',
				name: 'White',
			},
		],
		gender: Gender.UniSex,
		subType: SubProductType.ShirtBasic,
	},
	{
		articleNumber: 'E1051',
		displayName: "Women's Tank Top",
		description:
			'Deze  Single Jersey (Regular Fit) voor vrouwen heeft een zachte pasvorm en een neutraal maatlabel zijdelings in de nek.',
		imagePaths: ['E1051/top.jpg', 'E1051/top_front.jpg', 'E1051/top_back.jpg', 'E1051/top_side.jpg'],
		type: ProductType.Textile,
		sizes: [
			ProductSizes.XS,
			ProductSizes.S,
			ProductSizes.M,
			ProductSizes.L,
			ProductSizes.XL,
			ProductSizes.XXL,
			ProductSizes.XXXL,
		],
		composition: ['100% Katoen'],
		colors: [
			{
				hex: '#00060A',
				name: 'Black',
			},
			{
				hex: '#C94755',
				name: 'Bright Rose',
			},
			{
				hex: '#852638',
				name: 'Cherry Berry',
			},
			{
				hex: '#1E4026',
				name: 'Navy',
			},
			{
				hex: '#77002F',
				name: 'Steel Grey',
			},
			{
				hex: '#FFFFFF',
				name: 'White',
			},
		],
		gender: Gender.Female,
		subType: SubProductType.Top,
	},
	{
		articleNumber: 'F110',
		displayName: 'Original T',
		description:
			'Dit shirt heeft een ronde halsuitsnijding geribbeld met gelijkkleurige nekband. Daarnaast heeft het een fijn breiwerk voor verhoogde printbaarheid.',
		imagePaths: ['F110/original-t.jpg', 'F110/original-t_front.jpg', 'F110/original-t_back.jpg'],
		type: ProductType.Textile,
		sizes: [
			ProductSizes.S,
			ProductSizes.M,
			ProductSizes.L,
			ProductSizes.XL,
			ProductSizes.XXL,
			ProductSizes.XXXL,
			ProductSizes.XXXXL,
			ProductSizes.XXXXXL,
		],
		composition: ['100% Katoen'],
		colors: [
			{
				hex: '#0076AD',
				name: 'Azure Blue',
			},
			{
				hex: '#00060A',
				name: 'Black',
			},
			{
				hex: '#1E4026',
				name: 'Bottle Green',
			},
			{
				hex: '#77002F',
				name: 'Burgundy',
			},
			{
				hex: '#63673F',
				name: 'Classic Olive',
			},
			{
				hex: '#000121',
				name: 'Deep Navy',
			},
			{
				hex: '#E50D89',
				name: 'Fuchsia',
			},
			{
				hex: '#00A056',
				name: 'Kelly Green',
			},
			{
				hex: '#554B47',
				name: 'Light Graphite',
			},
			{
				hex: '#88bc53',
				name: 'Lime',
			},
			{
				hex: '#1E4026',
				name: 'Navy',
			},
			{
				hex: '#EF7E18',
				name: 'Orange',
			},
			{
				hex: '#431279',
				name: 'Purple',
			},
			{
				hex: '#E61709',
				name: 'Red',
			},
			{
				hex: '#004D9F',
				name: 'Royal Blue',
			},
			{
				hex: '#82CDF2',
				name: 'Sky Blue',
			},
			{
				hex: '#F9BA05',
				name: 'Sun Flower',
			},
			{
				hex: '#FFFFFF',
				name: 'White',
			},
			{
				hex: '#FFED00',
				name: 'Yellow',
			},
		],
		gender: Gender.Male,
		subType: SubProductType.Shirt,
	},
	{
		articleNumber: 'F111',
		displayName: 'Ladies Original T',
		description:
			'Dit shirt heeft een ronde halsuitsnijding geribbeld met gelijkkleurige nekband. Het heeft ook een gevormde zijnaden voor een vrouwelijke pasvorm. Daarnaast heeft het een fijn breiwerk voor verhoogde printbaarheid.',
		imagePaths: [
			'F111/ladies-original-t.jpg',
			'F111/ladies-original-t_front.jpg',
			'F111/ladies-original-t_back.jpg',
		],
		type: ProductType.Textile,
		sizes: [ProductSizes.XS, ProductSizes.S, ProductSizes.M, ProductSizes.L, ProductSizes.XL, ProductSizes.XXL],
		composition: ['100% Katoen'],
		colors: [
			{
				hex: '#0076AD',
				name: 'Azure Blue',
			},
			{
				hex: '#00060A',
				name: 'Black',
			},
			{
				hex: '#1E4026',
				name: 'Bottle Green',
			},
			{
				hex: '#77002F',
				name: 'Burgundy',
			},
			{
				hex: '#63673F',
				name: 'Classic Olive',
			},
			{
				hex: '#000121',
				name: 'Deep Navy',
			},
			{
				hex: '#E50D89',
				name: 'Fuchsia',
			},
			{
				hex: '#00A056',
				name: 'Kelly Green',
			},
			{
				hex: '#554B47',
				name: 'Light Graphite',
			},
			{
				hex: '#88bc53',
				name: 'Lime',
			},
			{
				hex: '#1E4026',
				name: 'Navy',
			},
			{
				hex: '#EF7E18',
				name: 'Orange',
			},
			{
				hex: '#431279',
				name: 'Purple',
			},
			{
				hex: '#E61709',
				name: 'Red',
			},
			{
				hex: '#004D9F',
				name: 'Royal Blue',
			},
			{
				hex: '#82CDF2',
				name: 'Sky Blue',
			},
			{
				hex: '#F9BA05',
				name: 'Sun Flower',
			},
			{
				hex: '#FFFFFF',
				name: 'White',
			},
			{
				hex: '#FFED00',
				name: 'Yellow',
			},
		],
		gender: Gender.Female,
		subType: SubProductType.Shirt,
	},
	{
		articleNumber: 'F110K',
		displayName: 'Kids Original T',
		description:
			'Dit shirt heeft een ronde halsuitsnijding geribbeld met gelijkkleurige nekband. Het heeft ook een gevormde zijnaden voor een vrouwelijke pasvorm. Daarnaast heeft het een fijn breiwerk voor verhoogde printbaarheid.',
		imagePaths: ['F110K/kids-original-t.jpg', 'F110K/kids-original-t_front.jpg', 'F110K/kids-original-t_back.jpg'],
		type: ProductType.Textile,
		sizes: [
			ProductSizes.K104,
			ProductSizes.K116,
			ProductSizes.K128,
			ProductSizes.K140,
			ProductSizes.K152,
			ProductSizes.K164,
		],
		composition: ['100% Katoen'],
		colors: [
			{
				hex: '#0076AD',
				name: 'Azure Blue',
			},
			{
				hex: '#00060A',
				name: 'Black',
			},
			{
				hex: '#1E4026',
				name: 'Bottle Green',
			},
			{
				hex: '#77002F',
				name: 'Burgundy',
			},
			{
				hex: '#63673F',
				name: 'Classic Olive',
			},
			{
				hex: '#000121',
				name: 'Deep Navy',
			},
			{
				hex: '#E50D89',
				name: 'Fuchsia',
			},
			{
				hex: '#00A056',
				name: 'Kelly Green',
			},
			{
				hex: '#554B47',
				name: 'Light Graphite',
			},
			{
				hex: '#88bc53',
				name: 'Lime',
			},
			{
				hex: '#1E4026',
				name: 'Navy',
			},
			{
				hex: '#EF7E18',
				name: 'Orange',
			},
			{
				hex: '#431279',
				name: 'Purple',
			},
			{
				hex: '#E61709',
				name: 'Red',
			},
			{
				hex: '#004D9F',
				name: 'Royal Blue',
			},
			{
				hex: '#82CDF2',
				name: 'Sky Blue',
			},
			{
				hex: '#F9BA05',
				name: 'Sun Flower',
			},
			{
				hex: '#FFFFFF',
				name: 'White',
			},
			{
				hex: '#FFED00',
				name: 'Yellow',
			},
		],
		gender: Gender.Kids,
		subType: SubProductType.Shirt,
	},
	{
		articleNumber: 'F350',
		displayName: 'Performance T',
		description:
			'Dit sport shirt heeft een 100% getextureerd polyester voor uitstekende vochtafvoer en snelle droging van het materiaal. Ideaal voor intensieve inspanningen met maximaal comfort',
		imagePaths: ['F350/performance-t.jpg', 'F350/performance-t_front.jpg', 'F350/performance-t_back.jpg'],
		type: ProductType.Textile,
		sizes: [ProductSizes.S, ProductSizes.M, ProductSizes.L, ProductSizes.XL, ProductSizes.XXL],
		composition: ['100% Polyester'],
		colors: [
			{
				hex: '#0076AD',
				name: 'Azure Blue',
			},
			{
				hex: '#E9E200',
				name: 'Bright Yellow',
			},
			{
				hex: '#00060A',
				name: 'Black',
			},
			{
				hex: '#000121',
				name: 'Deep Navy',
			},
			{
				hex: '#E50D89',
				name: 'Fuchsia',
			},
			{
				hex: '#88bc53',
				name: 'Lime',
			},
			{
				hex: '#E61709',
				name: 'Red',
			},
			{
				hex: '#004D9F',
				name: 'Royal Blue',
			},
			{
				hex: '#FFFFFF',
				name: 'White',
			},
		],
		gender: Gender.UniSex,
		subType: SubProductType.SportShirt,
	},
	{
		articleNumber: 'F550',
		displayName: "Men's Performance Polo",
		description:
			'Deze sport polo heeft 100% getextureerd polyester voor vochtafvoer en snelle droging van het materiaal. Het heeft ook een drieknoopssluiting met 3 gelijkgekleurde knopen',
		imagePaths: [
			'F550/men-performance-polo.jpg',
			'F550/men-performance-polo_front.jpg',
			'F550/men-performance-polo_back.jpg',
		],
		type: ProductType.Textile,
		sizes: [ProductSizes.S, ProductSizes.M, ProductSizes.L, ProductSizes.XL, ProductSizes.XXL, ProductSizes.XXXL],
		composition: ['100% Polyester'],
		colors: [
			{
				hex: '#00060A',
				name: 'Black',
			},
			{
				hex: '#000121',
				name: 'Deep Navy',
			},
			{
				hex: '#E61709',
				name: 'Red',
			},
			{
				hex: '#004D9F',
				name: 'Royal Blue',
			},
			{
				hex: '#FFFFFF',
				name: 'White',
			},
		],
		gender: Gender.Male,
		subType: SubProductType.SportPolo,
	},
	{
		articleNumber: 'F551',
		displayName: "Laides's Performance Polo",
		description:
			'Deze sport polo heeft 100% getextureerd polyester voor vochtafvoer en snelle droging van het materiaal. Het heeft ook een drieknoopssluiting met 3 gelijkgekleurde knopen',
		imagePaths: [
			'F551/ladies-performance-polo.jpg',
			'F551/ladies-performance-polo_front.jpg',
			'F551/ladies-performance-polo_back.jpg',
			'F551/ladies-performance-polo_side.jpg',
		],
		type: ProductType.Textile,
		sizes: [ProductSizes.S, ProductSizes.M, ProductSizes.L, ProductSizes.XL, ProductSizes.XXL],
		composition: ['100% Polyester'],
		colors: [
			{
				hex: '#00060A',
				name: 'Black',
			},
			{
				hex: '#000121',
				name: 'Deep Navy',
			},
			{
				hex: '#E61709',
				name: 'Red',
			},
			{
				hex: '#004D9F',
				name: 'Royal Blue',
			},
			{
				hex: '#FFFFFF',
				name: 'White',
			},
		],
		gender: Gender.Female,
		subType: SubProductType.SportPolo,
	},
];
