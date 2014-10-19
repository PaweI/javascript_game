var userChoice = prompt("Do you choose rock, paper, scissors?")

var computerChoice = Math.random()

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (0.33 < computerChoice < 0.67) {
    computerChoice = "paper"
} else {
    computerChoice = "scissors"
}
