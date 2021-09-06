import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [size2, setSize2] = useState(window.innerHeight);

  const checkSize = () => {
    setSize(window.innerWidth);
    setSize2(window.innerHeight);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    return () => {
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }, []);
  return (
    <>
      <h1>window</h1>
      <h2>{size} x {size2} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
