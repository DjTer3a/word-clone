import React from "react";
import { range } from "../../utils";
import {checkGuess} from "../../../src/game-helpers";
function GuessSlots({ guess,answer }) {
  const result = checkGuess(guess, answer);
  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((num) => (
            <span className={result ?  "cell "+result[num].status : "cell"} key={num}>
            {result ? result[num].letter  : undefined}
            </span>
        ))}
      </p>
    </div>
  );
}

export default GuessSlots;
