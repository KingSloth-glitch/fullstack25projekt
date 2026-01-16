// 1. Skapa ett nytt <div>-element
const newDiv = document.createElement("div");

// 2. Skapa textinnehåll och lägg det i div:en
const text = document.createTextNode("Detta är ett nytt div-element skapat med JavaScript!");
newDiv.appendChild(text);

// 3. Stilisera div:en med JavaScript
newDiv.style.backgroundColor = "lightblue";
newDiv.style.color = "black";
newDiv.style.padding = "15px";
newDiv.style.margin = "20px";
newDiv.style.borderRadius = "8px";
newDiv.style.fontSize = "18px";
newDiv.style.textAlign = "center";

// 4. Lägg till div:en i body
document.body.appendChild(newDiv);

// 1. Välj alla <p>-element
const paragraphs = document.querySelectorAll("p");

// Bonus: välj knappen
const button = document.getElementById("changeTextBtn");

// 3. När knappen klickas
button.addEventListener("click", function () {

    // 2. Loopa igenom alla <p>-element och ändra texten
    paragraphs.forEach(function (p, index) {
        p.textContent = `Texten har ändrats i stycke ${index + 1}`;
    });

});

// Hämta formulär och element
const form = document.getElementById("userForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const resultDiv = document.getElementById("result");

// Lyssna på submit
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Stoppar sidomladdning

    // Samla in data
    const username = usernameInput.value;
    const email = emailInput.value;

    // Visa data på sidan
    resultDiv.textContent = `Användarnamn: ${username}, E-post: ${email}`;

    // Alternativ: visa i konsolen
    console.log("Användarnamn:", username);
    console.log("E-post:", email);
});

