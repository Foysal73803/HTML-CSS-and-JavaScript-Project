let guessBtn = document.getElementById("guessButton");
let resultMessage = document.getElementById("message");
let guessInput = document.getElementById("guessInput");

const randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let guessed_nums = [];

guessBtn.addEventListener("click", () => {
    const userGuess = parseInt(guessInput.value);
    if(userGuess < 1 || userGuess > 100){
      alert("please enter the between 1 and 100")
    } else{
      guessed_nums.push(userGuess);
      attempts++;

      if (userGuess < randomNum) {
        resultMessage.textContent = "Your guess is too low.";
    } else if (userGuess > randomNum) {
        resultMessage.textContent = "Your guess is too high.";
    } else if (userGuess === randomNum) {
        resultMessage.textContent = "Congratulations";
        resultMessage.style.color = "green";
        guessBtn.disabled = true;
    }
    }
});

guessInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        guessBtn.click();
    }
});
