import React, { useState, useEffect } from 'react';

const Typewriter = ({ words, wait = 2500 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    let timeoutVal;
    if (reverse) {
      timeoutVal = 30;
    } else if (subIndex === words[index].length) {
      timeoutVal = wait;
    } else {
      timeoutVal = 50 + Math.random() * 30;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, timeoutVal);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, wait]);

  return (
    <span className="font-mono text-cyan-400">
      {`${words[index].substring(0, subIndex)}`}
      <span className={`${blink ? "opacity-100" : "opacity-0"} transition-opacity duration-100`}>|</span>
    </span>
  );
};

export default Typewriter;
