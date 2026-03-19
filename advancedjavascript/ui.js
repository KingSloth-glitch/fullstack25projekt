// ui.js

export function renderPosts(posts, listElement) {
    listElement.innerHTML = "";

    posts.forEach(post => {
        const li = document.createElement("li");
        li.textContent = post.title;
        listElement.appendChild(li);
    });
}

export function showMessage(messageElement, text) {
    messageElement.textContent = text;
}

export function clearInput(inputElement) {
    inputElement.value = "";
}