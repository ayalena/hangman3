function displayWordSoFar(word, guesses) {
  //code to display "_ _ _ _" in accordance to the length of the word
  // console.log(word);
  // console.log(guesses);

  // let array = [];
  //
  // for (let i = 0; i < word.length; i++) {
  //   array.push('_ ');
  //
  // }
  //
  // let text = array.join('').toString();
  // return text;

  //code to display where the letters that are guessed so far appear on it
  let output = "";
  for( let i = 0; i < word.length; i++) {
    if (guesses.includes(word[i])) {
      output = output + word[i] + " ";
    } else {
      output = output + "_ ";
    }
  }
  return output;
}

function isGameWon(word, guesses) {
  let output = displayWordSoFar(word, guesses);
  output = output.split(" ").join("");
  console.log(output);

  if (word === output) {
    return true;
  } else {
    return false;
  }
  // return word === output;
}

function isGameLost(word, guesses) {
  //maak een array voor foute letters in op te slaan
  let wrongLetters = [];
  // guesses = [];
  for (let i = 0; i < guesses.length; i++) {
    if (guesses[i] !== word) {
      wrongLetters.push(guesses[i]);
    } else {
      guesses.push(guesses[i]);
    }
  }

  if (wrongLetters.length >= 7) {
    return true;
  } else if (wrongLetters.length < 7) {
    return false;
  }

  //if you've guessed 7 wrong letters or more or less than 7 letters
  // if (guesses.length >= 7) {
  //   return true;
  // } else {
  //   return false;
  // }
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
