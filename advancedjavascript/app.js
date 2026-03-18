async function fetchUserAndPosts() {
	try {
		// Hämtar användaren
		const userRes = await fetch('https://jsonplaceholder.typicode.com/users/1')
		const user = await userRes.json()
		console.log('Användare:', user.name)

		// Hämtar användarens inlägg med hjälp av ID:t
		const id = user.id
		const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
		const posts = await postsRes.json()
		console.log('Första inlägget:', posts[0].title)
	} catch (err) {
		// Fångar upp eventuella nätverksfel eller kodfel
		console.error('Fel i kedjan:', err.message)
	} finally {
		// Körs alltid, oavsett om koden lyckades eller misslyckades
		console.log('Kedjan klar!')
	}
}

// Anropa funktionen
fetchUserAndPosts()

fetch('https://jsonplaceholder.typicode.com/users/1')
	.then(res => res.json())
	.then(user => {
		console.log('Användare:', user.name)
		// Returnera ett nytt Promise – kedjan väntar på det
		return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
	})
	.then(res => res.json())
	.then(posts => {
		console.log('Första inlägget:', posts[0].title)
	})
	.catch(err => {
		console.error('Fel i kedjan:', err.message)
	})
	.finally(() => console.log('Kedjan klar!'))

async function hämtaTodo() {
	try {
		const res = await fetch('https://jsonplaceholder.typicode.com/todos/5')
		if (!res.ok) throw new Error(`HTTP ${res.status}`)
		const todo = await res.json()
		console.log('Todo:', todo.title)
	} catch (err) {
		console.error(err.message)
	} finally {
		console.log('Klart!')
	}
}

hämtaTodo()
