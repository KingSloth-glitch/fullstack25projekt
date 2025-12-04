function ispalindrome(text) {
    let cleaned = text.toLowerCase().replace(/\s+/g, "");

    let reversed = cleaned.split("").reverse().join("");

    if (cleaned === reversed) {
        return "true";
    } else {
        return "false";
    }
    }
    console.log(ispalindrome("level"));
