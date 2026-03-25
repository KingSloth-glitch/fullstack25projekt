export function renderaLista(posts) {
	const ul = document.getElementById('list')
	ul.innerHTML = posts.map(p => `<li>${p.title}</li>`).join('')
}

export function visaBekräftelse(id) {
	document.getElementById('confirmation').textContent = `✅ Skapad med ID: ${id}`
}
