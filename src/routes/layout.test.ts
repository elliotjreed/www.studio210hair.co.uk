import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import { resolve } from 'path';

describe('Typography Configuration', () => {
	it('should have correct font CSS custom properties in layout.css', () => {
		const layoutCssPath = resolve(__dirname, 'layout.css');
		const layoutCss = readFileSync(layoutCssPath, 'utf-8');

		// Check that font imports are present
		expect(layoutCss).toContain("@import '@fontsource-variable/playfair-display'");
		expect(layoutCss).toContain("@import '@fontsource-variable/inter'");

		// Check that font CSS custom properties are correctly set
		expect(layoutCss).toContain("--font-sans: 'Inter Variable'");
		expect(layoutCss).toContain("--font-serif: 'Playfair Display Variable'");
	});
});
