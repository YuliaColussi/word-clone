import React from "react";

function GuessesList({guessesList}) {
  return(
      <div className="guess-results">
          {guessesList.map((guess) =>
          <p className="guess">{guess}</p>
        )}
      </div>
  );
}

export default GuessesList;
