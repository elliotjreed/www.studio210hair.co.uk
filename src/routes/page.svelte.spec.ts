import { page } from 'vitest/browser';
import { describe, expect, it, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';
import { generateLocalBusinessSchema } from '$lib/utils/seo';

// Mock $app/stores
vi.mock('$app/stores', () => ({
	page: {
		subscribe: (fn: (value: { url: { pathname: string; href: string } }) => void) => {
			fn({ url: { pathname: '/', href: 'http://localhost:5173/' } });
			return () => {};
		}
	}
}));

describe('/+page.svelte', () => {
	it('should render h1', async () => {
		render(Page, {
			props: {
				data: {
					seo: {
						title: 'Test Title',
						description: 'Test Description',
						jsonLd: generateLocalBusinessSchema()
					},
					featuredServices: [],
					reviews: [],
					galleryPhotos: []
				}
			}
		});

		const heading = page.getByRole('heading', { level: 1 });
		await expect.element(heading).toBeInTheDocument();
	});
});
