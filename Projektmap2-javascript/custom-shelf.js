const bookInput = document.getElementById('bookInput');
const addBookButton = document.getElementById('addBook');
const bookList = document.getElementById('bookList');
const searchInput = document.getElementById('searchInput');

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
});

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
});

bookInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addBookButton.click();
    }
});