import { describe, it, expect } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { page } from 'vitest/browser';
import Hero from './Hero.svelte';

describe('Hero Typography', () => {
	it('should apply serif font to h1 heading', async () => {
		render(Hero);

		const heading = page.getByRole('heading', { level: 1 });
		await expect.element(heading).toBeInTheDocument();

		// Check that the heading has the font-serif class
		const headingElement = heading.element();
		expect(headingElement.className).toContain('font-serif');
	});
});
