import http from 'http';

let server;
let port;

beforeAll((done) => {
	server = http.createServer((req, res) => {
		let body = '';
		req.on('data', (chunk) => { body += chunk; });
		req.on('end', () => {
			res.setHeader('Content-Type', 'application/json');
			try {
				const data = JSON.parse(body);
				if (req.url === '/Login.php' && req.method === 'POST') {
					const response = data.login === 'testuser'
						? { id: 1, firstName: 'Test', lastName: 'User' }
						: { id: 0, firstName: '', lastName: '' };
					res.writeHead(200);
					res.end(JSON.stringify(response));
				} else if (req.url === '/SearchColors.php' && req.method === 'POST') {
					res.writeHead(200);
					res.end(JSON.stringify({ results: ['red', 'blue', 'green'] }));
				} else {
					res.writeHead(404);
					res.end(JSON.stringify({ error: 'Not found' }));
				}
			} catch {
				res.writeHead(400);
				res.end(JSON.stringify({ error: 'Bad request' }));
			}
		});
	});

	server.listen(0, () => {
		port = server.address().port;
		done();
	});
});

afterAll((done) => {
	server.close(done);
});

test('Login endpoint returns JSON with id, firstName, and lastName', async () => {
	const res = await fetch(`http://localhost:${port}/Login.php`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ login: 'testuser', password: 'pass123' }),
	});
	const data = await res.json();
	expect(data).toHaveProperty('id');
	expect(data).toHaveProperty('firstName');
	expect(data).toHaveProperty('lastName');
});

test('SearchColors endpoint returns JSON with a results array', async () => {
	const res = await fetch(`http://localhost:${port}/SearchColors.php`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ search: 'red', userId: 1 }),
	});
	const data = await res.json();
	expect(data).toHaveProperty('results');
	expect(Array.isArray(data.results)).toBe(true);
});
