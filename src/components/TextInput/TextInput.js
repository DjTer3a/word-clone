import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
function TextInput({ guess, setGuess, setGuesses, guesses,answer, gameStatus,setGameStatus }) {
  function handleSubmit(event) {
    event.preventDefault();
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if(guess === answer){
      setGameStatus("won");
    }
    else if(nextGuesses.length >= NUM_OF_GUESSES_ALLOWED && guess !== answer){
      setGameStatus("lost");
    }
    setGuess("");
  }

  return (
    <>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          maxLength="5"
          title="5 letter word"
          required
          pattern="[a-zA-Z]{5}"
          id="guess-input"
          type="text"
          disabled= {gameStatus !== "running" ? true : false }
          value={guess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setGuess(nextGuess);
          }}
        />
      </form>
      {gameStatus === "won" && (
        <div className="happy banner">
          <p><strong>Congratulations!</strong> Got it in {' '} <strong> {guesses.length === 1 ? '1 guess' :  `${guesses.length} guesses`}</strong>.</p>
        </div>)}
        
      {gameStatus === "lost" && (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>)}
    </>
  );
}

export default TextInput;
