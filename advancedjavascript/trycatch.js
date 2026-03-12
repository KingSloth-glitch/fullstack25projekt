//const url= "https://jsonplaceholder.typicode.com/posts/1";

//fetch(url)
//.then(res => res.json())
//.then(data => console.log(data))
//.catch(err => console.log("Något gick fel: ", err))
//.finally(() => console.log("Klart!"));

fetch("https://jsonplaceholder.typicode.com/posts/1")
.then(res => res.json())
.then(user => {
    console.log("user:", user.name);
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
})

.then(res => res.json())

.then(posts => {
    console.log("första inläggets titel:", posts[0].title);
})

.catch(err => console.error("Något gick fel: ", err))

.finally(() => console.log("Klart!"));

async function getUserAndPosts() {
    try {
        const userRes = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const user = await userRes.json();

        console.log("User:", user.name);

        const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        const posts = await postsRes.json();

        console.log("Första inläggets titel:", posts[0].title);
    } catch (err) {
        console.error("Något gick fel: ", err);
    } finally {
        console.log("Klart!");
    }
}
getUserAndPosts();