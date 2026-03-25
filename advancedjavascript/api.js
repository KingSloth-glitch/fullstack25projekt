export async function hämtaInlägg() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
	if (!res.ok) throw new Error(`Fel: ${res.status}`)
	return res.json()
}

export async function skapaInlägg(titel) {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ title: titel, body: 'test', userId: 1 }),
	})
	return res.json()
}