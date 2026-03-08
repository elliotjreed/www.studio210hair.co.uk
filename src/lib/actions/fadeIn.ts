import type { Action } from 'svelte/action';

interface FadeInOptions {
	delay?: number;
	threshold?: number;
}

export const fadeIn: Action<HTMLElement, FadeInOptions | undefined> = (node, options = {}) => {
	const { delay = 0, threshold = 0.1 } = options;

	node.classList.add('fade-in-ready');

	if (delay > 0) {
		node.style.transitionDelay = `${delay}ms`;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			}
		},
		{ threshold }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
			observer.disconnect();
		}
	};
};
