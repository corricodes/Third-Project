const myName = "Corri";

if (myName === "Corri") {
    console.log("Hello!");
}

let isLoggedIn = true;

if (!isLoggedIn) {  // the "!" indicates "false"
    console.log("User is NOT logged in!");
}

const enteredUserName = ""; //empty string or "0" are treated as "false"

if (enteredUserName) {
    console.log("Input is valid!");
}