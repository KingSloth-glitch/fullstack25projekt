import { hämtaInlägg, skapaInlägg } from './api.js'
import { renderaLista, visaBekräftelse } from './ui.js'

document.getElementById('fetchBtn').addEventListener('click', async () => {
	const posts = await hämtaInlägg()
	renderaLista(posts)
})

document.getElementById('postForm').addEventListener('submit', async e => {
	e.preventDefault()
	const titel = document.getElementById('titleInput').value
	const data = await skapaInlägg(titel)
	visaBekräftelse(data.id)
})