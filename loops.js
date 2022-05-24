for (let i = 0; i < 10; i++) {      // "i++" is the shortcut for i = i + 1. this also works for "-"
    console.log(i);
}

const users = ["Corri", "Skwirt", "Opher"];

for (const user of users) {
    console.log(user);
}

const loggedInUser = {
    name: "Corri",
    age: "32",
    isAdmin: true
};

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser[propertyName]);
}

let isFinished = false;

while (!isFinished) {
    isFinished = confirm("Do you want to quit?")
}

console.log("Done!");