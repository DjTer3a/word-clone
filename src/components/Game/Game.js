import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import TextInput from '../TextInput/TextInput';
import GuessTrack from '../GuessTrack/GuessTrack';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  return (
    <>
      <GuessTrack guesses={guesses}/>
      <TextInput guess={guess} setGuess ={setGuess}  setGuesses={setGuesses} guesses={guesses}/>
    </>
  );
  
}

export default Game;
