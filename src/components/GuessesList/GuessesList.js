import React from "react";

function GuessesList({guessesList}) {
  return(
      <div className="guess-results">
          {guessesList.map(({value, id}) =>
          <p className="guess" id={id}>{value}</p>
        )}
      </div>
  );
}

export default GuessesList;
