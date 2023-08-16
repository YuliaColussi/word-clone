import React from "react";
import {range} from "./../../utils";

function Guess({ value }) {

    function getValuesStatus(letter, valueArray) {
        const result =  valueArray.find(item => item.letter === letter);

        return result.status;
    }

    const wordToLettersArray = value && Array.from(value.value);

    return (
        <p className="guess">
            {range(5).map((num) => (
                <span key={num} className={`cell ${value && getValuesStatus(wordToLettersArray[num], value.letterStatuses)}`}>
                {value ? wordToLettersArray[num] : ''}
            </span>
            ))}
    </p>
    )
}

export default Guess;
