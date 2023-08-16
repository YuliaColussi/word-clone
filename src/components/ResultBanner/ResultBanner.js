import React from "react";

function ResultBanner({status, guessesList, answer}) {
  return (
      <div className={`banner ${status}`}>
        {status === 'happy' &&
          <p>
              <strong>Congratulations!</strong> Got it in
              <strong> {guessesList.length} guesses</strong>.

          </p>
        }
          {status === 'sad' && <p>Sorry, the correct answer is <strong>{answer}</strong>.</p> }
      </div>
  );
}

export default ResultBanner;
