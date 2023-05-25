import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import TextInput from "../TextInput/TextInput";
import GuessTrack from "../GuessTrack/GuessTrack";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("running");
  
  return (
    <>
      <GuessTrack guesses={guesses} answer={answer}/>
      <TextInput
        guess={guess}
        setGuess={setGuess}
        setGuesses={setGuesses}
        guesses={guesses}
        answer={answer}
        gameStatus={gameStatus}
        setGameStatus= {setGameStatus}
      />
    </>
  );
}

export default Game;
