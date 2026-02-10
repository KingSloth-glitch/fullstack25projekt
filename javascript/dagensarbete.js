if (true) {
function performMathOperations(number) {
    console.log("Ursprungligt tal:", number);
    console.log("Math.round:", Math.round(number));
    console.log("Math.ceil:", Math.ceil(number));
    console.log("Math.floor:", Math.floor(number));
}
performMathOperations(4.7);

function generateRandomNumber() {
    return Math.round(Math.random() * 99 + 1);
}
console.log("Slumpmässigt tal mellan 1 och 100:", generateRandomNumber());
}



$(document).ready(function () {

    // Klick på knapp – ändra text i alla paragrafer
    $("#changeTextBtn").on("click", function () {
        $("p").text("Texten har ändrats!");
    });

    // Hover-effekt på paragrafer
    $("p").hover(
        function () {
            $(this).css("background-color", "lightblue");
        },
        function () {
            $(this).css("background-color", "");
        }
    );

});

$(document).ready(function () {

    $("#myForm").on("submit", function (e) {
        e.preventDefault(); // stoppar formuläret

        // Rensa gamla meddelanden
        $(".error").text("");
        $("#successMessage").text("");

        let isValid = true;

        const username = $("#username").val().trim();
        const email = $("#email").val().trim();

        // Validera användarnamn
        if (username === "") {
            $("#usernameError").text("Användarnamn krävs.");
            isValid = false;
        }

        // Enkel e-postkontroll
        if (email === "") {
            $("#emailError").text("E-post krävs.");
            isValid = false;
        } else if (!email.includes("@") || !email.includes(".")) {
            $("#emailError").text("Ange en giltig e-postadress.");
            isValid = false;
        }

        // Om allt är rätt
        if (isValid) {
            $("#successMessage").text("Formuläret har skickats korrekt!");
            $("#myForm")[0].reset();
        }
    });

});

