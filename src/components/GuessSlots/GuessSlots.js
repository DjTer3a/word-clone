import React from "react";
import { range } from "../../utils";
import {checkGuess} from "../../../src/game-helpers";
function GuessSlots({ guess,answer }) {
  const result = checkGuess(guess, answer);
  function Cell({status, letter}) {
    const className = status ? `cell ${status}` : 'cell';
      return <span className={className}>{letter}</span>;
  }
  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((num) => (
            <Cell key={num} status={result ? result[num].status : undefined} letter={result ? result[num].letter : undefined} />
        ))}
      </p>
    </div>
  );
}

export default GuessSlots;
