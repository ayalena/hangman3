const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {
  //Zorg dat de gebruiker letters kan raden
  console.log("Dit heb je tot nu toe geraden: ", guesses);
  let letter = question("Raad een letter: ");


  //Houdt in de guesses-array bij welke letters de gebruiker geraden heeft
  if (word.includes(letter)) {
    guesses.push(letter);
  }

  //array voor foute letters?
  // let wrongLetters = [];
  // for (let i = 0; i < word.length; i++) {
  //   if (word.includes(letter)) {
  //     guesses.push(letter);
  //   } else {
  //     wrongLetters.push(letter);
  //   }
  // }

  //Laat zien welke letters al geraden zijn (met displayWordSoFar)
  displayWordSoFar(word, guesses);


  //Heeft iemand alle letters geraden? Wuhuuu! Log dan dat ze gewonnen hebben
  if (isGameWon(word, guesses)) {
    console.log("You won!");
  }

  //Heeft iemand 7 letters fout geraden? Jammer! Log dan dat ze verloren hebben
  if (isGameLost(word, guesses)) {
    console.log("Ya lose sucker");
    return;
  }

  //Stop het programma met return wanneer iemand gewonnen of verloren heeft
  if (isGameLost(word, guesses) || isGameWon(word, guesses)) {
    return;
  }
  // } else {
  //   game(word, guesses);
  // }
  // Heeft iemand nog niet gewonnen of verloren? Dan gaat het spel gewoon verder

  // volgende ronde! we roepen game nog een keer aan

  game(word, guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);

game("javascript", []);
