import React, { useCallback } from 'react';

const countLetters = (text: string): [number, string] => {
  if (!text) {
    return [0, ''];
  }

  console.log('Calculating ...');

  let count: number = 1;
  let largestSequence: number = 1;
  let last: string = '';
  let bigSeqChar: string = '';

  text.split('').map((Char) => {
    console.log(Char);
    if (Char === last) {
      count++;
      1;
    } else if (count > largestSequence) {
      largestSequence = count;
      bigSeqChar = last;
      count = 1;
    }
    last = Char;
  });

  if (count > largestSequence) {
    largestSequence = count;
    bigSeqChar = last;
    count = 1;
  }

  return [largestSequence, bigSeqChar];
};

const UseComponent = ({ textProps, textProps2 = '' }) => {
  const [counter, setCounter] = React.useState<number>(0);

  const [largestSequence, largestSequenceChar] = countLetters(textProps);

  console.log('render', largestSequence);

  return (
    <React.Fragment>
      <h2>React Hooks UseComponent</h2>
      <div>
        <button onClick={() => setCounter(counter + 1)}>
          increment {counter}
        </button>
        <p>Text = {textProps}</p>
        <h3>The largest sequence is {largestSequence}</h3>
        <h3>{`Char ${largestSequenceChar}`}</h3>
      </div>
    </React.Fragment>
  );
};

export default UseComponent;
