import fetchUsers from "./api.js"
import renderUsers from ".ui.js"

const fetchBtn = document.getElementById('fetchBtn')

fetchBtn.addEventListener('click', async () => {
    const users = await fetchUsers()
    renderUsers(users)
})