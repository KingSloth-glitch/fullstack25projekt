import fetchUsers from "./api.js"
import renderUsers from "./ui.js"

const fetchBtn = document.getElementById('fetchBtn')

fetchBtn.addEventListener('click', async () => {
    const users = await fetchUsers()
    renderUsers(users)

})

const container = document.getElementById('grid');

const fragment = document.createDocumentFragment();

const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

for (let i = 0; i < 200; i++) {
    const div = document.createElement('div');
    div.style.backgroundColor = getRandomColor();
    div.style.width = '200px';
    div.style.height = '30px';
    div.textContent = `Box ${i + 1}`;
    fragment.appendChild(div);
}
container.appendChild(fragment);


const button = document.getElementById('removeBtn');

function removeSelf() {
    console.log('button clicked');
    button.removeEventListener('click', removeSelf);
    button.remove();
}
button.addEventListener('click', removeSelf);