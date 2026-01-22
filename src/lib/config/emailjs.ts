/**
 * EmailJS Configuration
 *
 * To use EmailJS:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create an email service
 * 3. Create an email template
 * 4. Get your public key from the EmailJS dashboard
 * 5. Add these values to your .env file
 */

export const emailjsConfig = {
	publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
	serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
	templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
};

/**
 * Check if EmailJS is properly configured
 */
export function isEmailJSConfigured(): boolean {
	return !!(
		emailjsConfig.publicKey &&
		emailjsConfig.serviceId &&
		emailjsConfig.templateId
	);
}
