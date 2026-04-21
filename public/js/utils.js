export function isValidHexColor(color) {
	return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(color);
}

export function parseCookieString(cookieStr) {
	const result = { firstName: '', lastName: '', userId: -1 };
	if (!cookieStr) return result;
	const splits = cookieStr.split(',');
	for (let i = 0; i < splits.length; i++) {
		const thisOne = splits[i].trim();
		const tokens = thisOne.split('=');
		if (tokens[0] === 'firstName') result.firstName = tokens[1];
		else if (tokens[0] === 'lastName') result.lastName = tokens[1];
		else if (tokens[0] === 'userId') result.userId = parseInt(tokens[1].trim(), 10);
	}
	return result;
}

export function buildLoginPayload(login, password) {
	return JSON.stringify({ login, password });
}

export function buildColorPayload(color, userId) {
	return JSON.stringify({ color, userId });
}
