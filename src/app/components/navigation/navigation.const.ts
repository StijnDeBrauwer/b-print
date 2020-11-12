import { LinkModel } from 'src/app/models/link.model';

export const routes = [
	new LinkModel('Diensten', '/diensten', [
		new LinkModel('Textiel', ''),
		new LinkModel('Belettering', ''),
		new LinkModel('Stikkers', ''),
		new LinkModel('Baches en vlaggen', ''),
		new LinkModel('Canvassen', ''),
	]),
	new LinkModel('Prijslijst', '/prijslijst'),
	new LinkModel('Contact', '/contact'),
];
