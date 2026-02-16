import { describe, it, expect, vi } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';
import Header from './Header.svelte';

// Mock $app/stores
vi.mock('$app/stores', () => ({
	page: {
		subscribe: (fn: (value: { url: { pathname: string } }) => void) => {
			fn({ url: { pathname: '/' } });
			return () => {};
		}
	}
}));

describe('Header Typography', () => {
	it('should apply serif font to Studio210 brand name', async () => {
		render(Header);

		const brandLink = page.getByRole('link', { name: /Studio210/i });
		await expect.element(brandLink).toBeInTheDocument();

		// Check that the brand link has the font-serif class
		const brandElement = brandLink.element();
		expect(brandElement.className).toContain('font-serif');
	});
});
