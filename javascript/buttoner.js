const button = document.getElementById("alertButton");

button.addEventListener("click", function() {
    alert("Button was clicked!");
});

const box = document.getElementById("box");

box.addEventListener("mousemove", function(event) {
    console.log("Musposition:");
    console.log("X: " + event.clientX + ", Y: " + event.clientY);
});

document.addEventListener("keydown", function(event) {
    console.log("Tangent nedtryckt:", event.key);
});

document.addEventListener("keyup", function(event) {
    console.log("Tangent släppt:", event.key);
});
