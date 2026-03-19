// main.js

import { getPosts, createPost } from "./api.js";
import { renderPosts, showMessage, clearInput } from "./ui.js";

const fetchBtn = document.getElementById("fetchPosts");
const postList = document.getElementById("postList");
const form = document.getElementById("postForm");
const titleInput = document.getElementById("titleInput");
const message = document.getElementById("message");

// GET
fetchBtn.addEventListener("click", async () => {
    try {
        const posts = await getPosts();
        renderPosts(posts, postList);
        showMessage(message, "");
    } catch (error) {
        console.error(error);
        showMessage(message, "Kunde inte hämta inlägg.");
    }
});

// POST
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        const data = await createPost(titleInput.value);
        console.log("Server response:", data);

        showMessage(message, "Inlägg skickat!");
        clearInput(titleInput);

    } catch (error) {
        console.error(error);
        showMessage(message, "Något gick fel vid skickning.");
    }
});