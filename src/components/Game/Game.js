import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input/index';
import ResultBanner from '../ResultBanner/index';
import GuessesList from '../GuessesList/index';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [ guessesList, setGuessesList ] = React.useState([]);
  const [ status, setStatus ] = React.useState('');

  return (
      <>
        <ResultBanner status={status} guessesList={guessesList} answer={answer}/>
        <GuessesList guessesList={guessesList}/>
        <Input setGuessesList={setGuessesList}
               guessesList={guessesList}
               answer={answer}
               status={status}
               setStatus={setStatus}
        />
      </>
  )
}

export default Game;
