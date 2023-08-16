import React from 'react';
import {checkGuess} from "./../../game-helpers";

function Input({guessesList, setGuessesList, answer, status, setStatus}) {
    const [ inputValue, setInputValue ] = React.useState('');

    function handleFormSubmit(event) {
        event.preventDefault();

        const nextInputValue = {
            value: inputValue,
            id: Math.random(),
            letterStatuses: checkGuess(inputValue, answer)
        }

        setGuessesList([...guessesList, nextInputValue])
        setInputValue('');

        if (inputValue === answer) {
            setStatus('happy');

            return;
        }

        if (guessesList.length >= 5) {
            setStatus('sad');
        }
    }
    return (
            <form className="guess-input-wrapper"
                onSubmit={(event) => handleFormSubmit(event)}
            >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                disabled={status && true}
                required
                type="text"
                id="guess-input"
                value={inputValue}
                onChange={(event) => {
                    const nextGuess = event.target.value;
                    setInputValue(nextGuess.toUpperCase());
                }}
                pattern=".{5}"
                title="Input must contain 5 characters"
            />
            </form>
   )
}

export default Input;