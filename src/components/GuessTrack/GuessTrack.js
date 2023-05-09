import React from "react";
import GuessSlots from "../GuessSlots/GuessSlots";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessTrack({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessSlots guess={guesses[num]} key={num} />
      ))}
    </div>
  );
}

export default GuessTrack;
