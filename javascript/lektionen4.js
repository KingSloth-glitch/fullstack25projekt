function validateEmail(email) {
    const trimmedEmail = email.trim();

    if (trimmedEmail.indexOf(" ") !== -1) {
        return false;
    }

    if (!trimmedEmail.includes("@")) {
        return false; 
    }

    return true; 
}

console.log(validateEmail("textexample@fun.com"));
console.log(validateEmail("example og mail.com"));

function formatName(name) {
    return name 
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(formatName("pOnTus OlSSon"));

function calculatePriceWithVAT(price, vatrate) {
    const vatAmount = price * (vatrate / 100);
    const totalprice = price + vatAmount;
    return Number(totalprice.toFixed(2));
}

console.log(calculatePriceWithVAT(100, 25));

function calculateFutureValue(startAmount, annualRate, years) {
    const rate = annualRate / 100;
    const futureValue = startAmount * Math.pow((1 + rate), years);
    return Number(futureValue.toFixed(2));
}

console.log(calculateFutureValue(13000, 1.6, 2));

 const people = [
    { name: "Alice", email: "alice@mail.com", address: "Street 1" },
    { name: "Bob", email: "bob@mail.com", address: "Street 2" },
    { name: "Anna", email: "anna@mail.com", address: "Street 3" },
    { name: "Charlie", email: "charlie@mail.com", address: "Street 4" }
];

function organiseAddressBook(people) {
    const result = {};

    people.forEach(person => {
        const firstLetter = person.name.charAt(0).toUpperCase();

        if (!result[firstLetter]) {
            result[firstLetter] = [];
        }

        result[firstLetter].push(person);
    });
    return result;
}

console.log(organiseAddressBook(people));


const products = [
    { name: "Äpple", category: "Frukt", amount: 50 },
    { name: "Banan", category: "Frukt", amount: 30 },
    { name: "Morot", category: "Grönsaker", amount: 20 },
    { name: "Mjölk", category: "Mejeri", amount: 10 }
];

function inventorySummary(products) {
    const summary = {};

    products.forEach(product => {
        const category = product.category;

        if (!summary[category]) {
            summary[category] = 0;
        }

        summary[category] += product.amount;
    });

    return summary;
}

console.log(inventorySummary(products));
