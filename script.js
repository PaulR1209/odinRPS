const choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(choices) {
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(getComputerChoice(choices));

function getHumanChoice() {
   let humanChoice = prompt('Type Rock, Paper or Scissors to play this round')
    return humanChoice
}

console.log(getHumanChoice());
