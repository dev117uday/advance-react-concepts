import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    console.log(" from handlesubmit ");
    e.preventDefault();
    console.log(refContainer.current.value);
    refContainer.current.value = "";
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    console.log(" from useEffect ");
    console.log(refContainer.current);
    // this is to automatically focus on the input
    refContainer.current.focus();
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <input type='text' ref={refContainer} />
        </div>
        <button type='submit'>submit</button>
      </form>
    </>
  );
};

export default UseRefBasics;
