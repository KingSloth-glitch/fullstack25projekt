const colorInput = document.getElementById("colorInput");
const saveButton = document.getElementById("saveColor");
const removeButton = document.getElementById("removeColor");
const colorDisplay = document.getElementById("colorDisplay");

/* Spara favoritfärg */
function saveFavoriteColor() {
    const color = colorInput.value.trim();

    if (color === "") return;

    localStorage.setItem("favoriteColor", color);
    showFavoriteColor();
}

/* Visa favoritfärg */
function showFavoriteColor() {
    const savedColor = localStorage.getItem("favoriteColor");

    if (savedColor) {
        colorDisplay.textContent = "Din favoritfärg är: " + savedColor;
        colorDisplay.style.color = savedColor;
    } else {
        colorDisplay.textContent = "Ingen favoritfärg sparad.";
        colorDisplay.style.color = "black";
    }
}

/* Radera favoritfärg */
function removeFavoriteColor() {
    localStorage.removeItem("favoriteColor");
    showFavoriteColor();
}

/* Event listeners */
saveButton.addEventListener("click", saveFavoriteColor);
removeButton.addEventListener("click", removeFavoriteColor);

/* Kör när sidan laddas */
document.addEventListener("DOMContentLoaded", showFavoriteColor);


function nextPage(pageNumber) {

    if (pageNumber === 1) {
        const answer1 = document.getElementById("q1").value;
        sessionStorage.setItem("answer1", answer1);
    }

    if (pageNumber === 2) {
        const answer2 = document.getElementById("q2").value;
        sessionStorage.setItem("answer2", answer2);
        showSummary();
    }

    document.getElementById("page" + pageNumber).style.display = "none";
    document.getElementById("page" + (pageNumber + 1)).style.display = "block";
}

function showSummary() {
    const summary = document.getElementById("summary");
    summary.innerHTML = "";

    const answer1 = sessionStorage.getItem("answer1");
    const answer2 = sessionStorage.getItem("answer2");

    summary.innerHTML += `<li>Fråga 1: ${answer1}</li>`;
    summary.innerHTML += `<li>Fråga 2: ${answer2}</li>`;
}

function finishQuiz() {
    alert("Quiz klart! Tack för dina svar.");
    sessionStorage.clear();
}

