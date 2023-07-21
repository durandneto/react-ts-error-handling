import React = require('react');

export const useCountLetters = (text: string): [number, string, Function] => {
  if (!text) {
    return [0, '', null];
  }

  const [largeSequence, setLargeSequence] = React.useState(0);
  const [bigChar, setBigChar] = React.useState('');

  let count = React.useRef(1);
  let ls = React.useRef(1);
  let last = React.useRef('');
  let bs = React.useRef('');

  function calculate() {
    console.log('Calculating ...');

    text.split('').map((Char) => {
      console.log(Char);
      if (Char === last.current) {
        count.current++;
      } else if (count.current > ls.current) {
        ls.current = count.current;
        bs = last;
        count.current = 1;
      }
      last.current = Char;
    });

    if (count.current > ls.current) {
      ls.current = count.current;
      bs.current = last.current;
      count.current = 1;
    }
    setLargeSequence(ls.current);
    setBigChar(bs.current);
  }

  return [largeSequence, bigChar, calculate];
};
