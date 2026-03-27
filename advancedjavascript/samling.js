import fetchUsers from "./break.js"
import renderUsers from './lyssna.js'

const fetchBtn = document.getElementById('fetchBtn')

fetchBtn.addEventListener('click', async () => {
    const users = await fetchUsers()
    renderUsers(users)
})