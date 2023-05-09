import React from "react";
import { range } from "../../utils";
function GuessSlots({ guess }) {
  return (
    <div className="guess-results">
      <p className="guess">
        {range(5).map((num) => (
          <span className="cell" key={num}>
            {guess ? guess[num] : undefined}
          </span>
        ))}
      </p>
    </div>
  );
}

export default GuessSlots;
