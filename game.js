var userChoice = prompt("Do you choose rock, paper, scissors?")

var computerChoice = Math.random()

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (0.33 < computerChoice < 0.67) {
    computerChoice = "paper"
} else {
    computerChoice = "scissors"
}

var compare = function (choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
        
};