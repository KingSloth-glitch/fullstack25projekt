const x = 5; //expression
const y = 10; //expression
const z = x + y; //expresssion 
console.log("Summan är: " + z); //statement
console.log(z > 15 ? "större än 15" : "mindre än eller lika med 15"); //statement 

function groupByKey(arr, key) {
    let groups = {};

    for (let item of arr) {
        let value = item[key];

        // Säkerhet: om värdet saknas
        if (value === undefined) {
            value = "unknown";
        }

        // Switch-sats för att skapa grupper
        switch (value) {
            case "A":
                if (!groups.A) groups.A = [];
                groups.A.push(item);
                break;

            case "B":
                if (!groups.B) groups.B = [];
                groups.B.push(item);
                break;

            case "C":
                if (!groups.C) groups.C = [];
                groups.C.push(item);
                break;

            default:
                if (!groups.other) groups.other = [];
                groups.other.push(item);
                break;
        }
    }

    // Skriver ut grupperna
    for (let group in groups) {
        console.log(`Grupp ${group}:`, groups[group]);
    }
}

const people = [
    { name: "Anna", group: "A" },
    { name: "Björn", group: "B" },
    { name: "Cecilia", group: "A" },
    { name: "David", group: "C" },
    { name: "Elin", group: "X" }
];

groupByKey(people, "group");

function checkNumber(num) {
    if (typeof num !== "number") {
        throw new Error("Fel: värdet måste vara ett nummer!");
    }

    if (num < 0) {
        throw new Error("Fel: talet får inte vara negativt!");
    }

    return "Numret är giltigt!";
}

try {
    console.log(checkNumber(-5));   // Testa med fel
} catch (error) {
    console.log("Fel fångat:", error.message);
}


let numbers = [3, 10, 7, 20, 15, 8];

for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];

    if (num % 2 === 0) {
        console.log(num + " är jämnt");
    } else {
        console.log(num + " är udda");
    }

    if (num % 5 === 0) {
        console.log(num + " är delbart med 5");
    }

    console.log("------");
}

// --- HOISTING MED var ---
//console.log(a); // ❗️ Output: undefined (var hoistas men är oinitialiserad)
//var a = 10;
//console.log(a); // Output: 10


// --- HOISTING MED let ---
//try {
  //  console.log(b); // ❗️ Fel: Cannot access 'b' before initialization
//} catch (err) {
//    console.log("Fel med let:", err.message);
//}
//let b = 20;


// --- HOISTING MED const ---
//try {
//    console.log(c); // ❗️ Fel: Cannot access 'c' before initialization
//} catch (err) {
//    console.log("Fel med const:", err.message);
//}
//const c = 30;

// --- SCOPE-SKILLNADER ---
//if (true) {
//    var x = 100;   // function/global scope
//    let y = 200;   // block scope
//    const z = 300; // block scope
//}

//console.log(x); // ✔ Fungerar (var är inte block-scope)

//try {
//    console.log(y); // ❗️ Fel: y is not defined
//} catch (err) {
//    console.log("Fel med let (scope):", err.message);
//}

//try {
//    console.log(z); // ❗️ Fel: z is not defined
//} catch (err) {
//    console.log("Fel med const (scope):", err.message);
//}

function convertType(value) {
    console.log("Ursprunglig typ:", typeof value);

    // Om värdet är en sträng → försök konvertera till nummer
    if (typeof value === "string") {
        let number = Number(value);

        if (!isNaN(number)) {
            console.log("Ny typ: number");
            console.log("Konverterat värde:", number);
        } else {
            console.log("Strängen kunde inte konverteras till ett nummer.");
        }
    }

    // Om värdet är ett tal → gör om till sträng
    else if (typeof value === "number") {
        let text = String(value);

        console.log("Ny typ: string");
        console.log("Konverterat värde:", text);
    }

    // Om det är något annat → skriv ut att det inte konverteras
    else {
        console.log("Datatypen kan inte konverteras:", typeof value);
    }
}
convertType("12345"); // Testa med sträng