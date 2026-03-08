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

describe('Header', () => {
	it('should apply serif font to Studio210 brand name', async () => {
		render(Header);

		const brandLink = page.getByRole('link', { name: /Studio210/i });
		await expect.element(brandLink).toBeInTheDocument();

		const brandElement = brandLink.element();
		expect(brandElement.className).toContain('font-serif');
	});

	it('should render with transparent background initially', async () => {
		render(Header);

		const header = page.getByRole('banner');
		await expect.element(header).toBeInTheDocument();

		const headerElement = header.element();
		// At scroll position 0, header should not have a navy background class
		expect(headerElement.className).not.toContain('bg-[var(--color-navy)]');
	});

	it('should render "Book Now" as a gold CTA pill button', async () => {
		render(Header);

		const mainNav = page.getByRole('navigation', { name: 'Main navigation' });
		const bookNowLink = mainNav.getByRole('link', { name: /Book Now/i });
		await expect.element(bookNowLink).toBeInTheDocument();

		const linkElement = bookNowLink.element();
		expect(linkElement.className).toContain('bg-[var(--color-gold)]');
		expect(linkElement.className).toContain('rounded-full');
	});
});
