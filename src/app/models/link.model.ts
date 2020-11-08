export class LinkModel {
	public text: string;
	public path: string;
	public children: LinkModel[];

	constructor(text: string, path?: string, children?: Array<LinkModel>) {
		this.text = text;

		if (path) {
			this.path = path;
		}

		if (children) {
			this.children = children;
		}
	}
}
