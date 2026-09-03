import { Page } from "@playwright/test";

export class Go {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async to(path: string, options?: { wait?: 'load' | 'domcontentloaded' | 'networkidle'; timeout?: number }) {
		await this.page.goto(path, { waitUntil: options?.wait ?? 'load', timeout: options?.timeout ?? 60000 });
	}

	async home() {
		await this.to('/');
	}

	async login() {
		await this.to('/login');
	}

	async products() {
		await this.to('/products');
	}

	async cart() {
		await this.to('/view_cart');
	}
}

