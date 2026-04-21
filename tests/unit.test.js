import { isValidHexColor, parseCookieString } from '../public/js/utils.js';

test('isValidHexColor accepts a valid 6-digit hex color', () => {
	expect(isValidHexColor('#FF5733')).toBe(true);
});

test('parseCookieString correctly parses firstName, lastName, and userId', () => {
	const result = parseCookieString('firstName=John,lastName=Doe,userId=42');
	expect(result.firstName).toBe('John');
	expect(result.lastName).toBe('Doe');
	expect(result.userId).toBe(42);
});
