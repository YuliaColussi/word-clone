import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/index';
import GuessesList from '../GuessesList/index';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [ guessesList, setGuessesList ] = React.useState([]);
    console.log(guessesList);
  return (
      <>
        <GuessesList guessesList={guessesList}/>
        <Input setGuessesList={setGuessesList} guessesList={guessesList}/>
      </>
  )
}

export default Game;
