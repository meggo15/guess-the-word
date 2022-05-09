const guessedLetters = document.querySelector (".guessed-letters");
const guessButton = document.querySelector (".guess");
const newGuess = document.querySelector (".letter");
const wordInProgress = document.querySelector (".word-in-progress");
const remainingGuesses = document.querySelector (".remaining");
const numGuessesRemaining = document.querySelector ("remaining span")
const guessMessage = document.querySelector (".message")
const playAgainButton = document.querySelector (".play-again");

const word = "magnolia";

const placeholder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        placeholderLetters.push ("●");
    }
    wordInProgress.innerText = placeholderLetters.join ("");
};

placeholder (word);

guessButton.addEventListener ("click", function (e){
    e.preventDefault();
    const guess = newGuess.value;
    console.log (guess);
    newGuess.value = "";
});
