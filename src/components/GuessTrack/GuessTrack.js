import React from "react";

function GuessTrack({guesses}) {
  return (
  <div className="guess-results">
    {guesses.map((guess) => (
      <p className="guess" key={Math.random()}>{guess}</p>
    ))}
  </div>);
}

export default GuessTrack;
