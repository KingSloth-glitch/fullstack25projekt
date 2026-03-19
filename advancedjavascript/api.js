// api.js

export async function getPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

    if (!res.ok) {
        throw new Error("Fel vid hämtning av inlägg");
    }

    return await res.json();
}

export async function createPost(title) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: title,
            body: "test",
            userId: 1
        })
    });

    if (!res.ok) {
        throw new Error("Fel vid skapande av inlägg");
    }

    return await res.json();
}