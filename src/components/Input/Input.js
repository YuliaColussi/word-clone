import React from 'react';

function Input() {
    const [ inputValue, setInputValue ] = React.useState('');

    function handleFormSubmit(event) {
        event.preventDefault();

        console.log({inputValue});
        setInputValue('');

    }
    return (
            <form className="guess-input-wrapper"
                onSubmit={(event) => handleFormSubmit(event)}
            >
            <label htmlFor="guess-input">Enter guess:</label>
            <input
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