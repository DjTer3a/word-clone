import React, { useState } from "react";

function TextInput() {

  function handleSubmit(event) {
    event.preventDefault();
    console.log({guess});
    setGuess('');
  }

  const [guess, setGuess] = useState("");
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input maxLength="5" title="5 letter word" pattern="[a-zA-Z]{5}" id="guess-input" type="text" value={guess} onChange={(event) => {
        const nextGuess = event.target.value.toUpperCase();
        setGuess(nextGuess)}}/>
    </form>
  );
}

export default TextInput;
