// First example: Sum numbers

const calculateSumButtonElement = document.querySelector("#calculator button");

function calculateSum() {
    const userNumberInputElement = document.getElementById("user-number");
    const enteredNumber = userNumberInputElement.value;

    let sumUpToNumber = 0;

    for (let i = 0; i <= enteredNumber; i++) {
        sumUpToNumber = sumUpToNumber + i;
    }

    const outputResultElement = document.getElementById("calculated-sum");

    outputResultElement.textContent = sumUpToNumber;
    outputResultElement.style.display = "block";
}

calculateSumButtonElement.addEventListener("click", calculateSum);

// Second example: Highlight links

const highlightLinksButtonElement = document.querySelector("#highlight-links button")

function highlightLinks() {
    const anchorElements = document.querySelectorAll("#highlight-links a");

    for (const anchorElement of anchorElements) {
        anchorElement.classList.add("highlight");
    }
}

highlightLinksButtonElement.addEventListener("click", highlightLinks);

// Third example: Display user data

const dummyUserData = {
    firstName: "Corri",
    lastName: "Baker",
    age: 32
};

const displayUserDataButtonElement = document.querySelector("#user-data button");

function displayUserData() {
    const outputDataElement = document.getElementById("output-user-data");

    outputDataElement.innerHTML = "";

    for (const key in dummyUserData) {
        const newUserDataListItemElement = document.createElement("li");
        const outputText = key.toUpperCase() + ": " + dummyUserData[key];
        newUserDataListItemElement.textContent =outputText;
        outputDataElement.append(newUserDataListItemElement);
    }
}

displayUserDataButtonElement.addEventListener("click", displayUserData);

// Fourth example: Statistics - roll the dice

const rollDiceButtonElement = document.querySelector("#statistics button");

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;   //Math.floor rounds down to nearest number ie. 5.64 => 5
}
// random number between 0-1, so multiply by max number and add 1 to get rid of the 0 option

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById("user-target-number");
    const diceRollsListElement = document.getElementById("dice-rolls");

    const enteredNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = "";

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        // if (rolledNumber == enteredNumber) {
        //     hasRolledTargetNumber = true;
        //  }
        numberOfRolls++;
        const newRollListItemElement = document.createElement("li");
        const outputText = "Roll " + numberOfRolls + ": " + rolledNumber;
        newRollListItemElement.textContent = outputText;
        diceRollsListElement.append(newRollListItemElement);
        hasRolledTargetNumber = rolledNumber == enteredNumber;
    }

    const outputTotalRollsElement = document.getElementById("output-total-rolls");
    const outputTargetNumberElement = document.getElementById("output-target-number")

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
}

rollDiceButtonElement.addEventListener("click", deriveNumberOfDiceRolls);