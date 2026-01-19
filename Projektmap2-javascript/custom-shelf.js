// lägga till böcker i en lista samt ta bort böckerna
const bookInput = document.getElementById('bookInput');
const addBookButton = document.getElementById('addBook');
const bookList = document.getElementById('bookList');
const searchInput = document.getElementById('searchInput');

if (addBookButton){
addBookButton.addEventListener("click", function() {
    const bookTitle = bookInput.value.trim();

    if (bookTitle === "") return;

    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = bookTitle;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Ta bort";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(removeBtn);
    bookList.appendChild(li);

    bookInput.value="";
});}

// sökfunktionen
if (searchInput){
searchInput.addEventListener("input", function() {
    const searchText = searchInput.value.toLowerCase();
    const books = bookList.querySelectorAll("li");

    books.forEach(book => {
        const title = book.textContent.toLowerCase();

        if (title.includes(searchText)) {
            book.style.display = "";
        } else {
            book.style.display = "none";
        }
        
    });
});}

// lägg till bok med enter-knappen
if (bookInput){
bookInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addBookButton.click();
    
}});}

// form validation script

const form = document.querySelector(".kontakt-form");

const nameInput = document.getElementById("name");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");

const nameError = document.getElementById("nameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const successMessage = document.getElementById("successMessage");
if (form){
form.addEventListener("submit", function(e) {
    e.preventDefault();

    nameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (nameInput.value.trim() === "") {
        nameError.textContent = "Förnamn krävs i fältet.";
        isValid = false;
    }

    if (lastNameInput.value.trim() === "") {
        lastNameError.textContent = "Efternamn krävs i fältet.";
        isValid = false;
    }

    if (emailInput.value.trim() === "" || !emailInput.value.includes("@")) {
        emailError.textContent = "E-post krävs i fältet.";
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Formuläret har skickats!";
        form.reset ();
    }
});}

// slideshow

const images = ["slot.jpg", "co-founder.jpg"];
let currentIndex = 0;

const slideshow = document.querySelector(".slideshow");
const slideImage = document.getElementById("slideImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".dot");

if (slideshow){
function updateSlide() {
    slideImage.src = images[currentIndex];

        dots.forEach(dot => dot.classList.remove("active"));
        dots[currentIndex].classList.add("active");
    }



function nextSlide() {
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    updateSlide();
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    updateSlide();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 10000);
}