import React from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState<number>(0);

  function incrementClick() {
    setCounter((prev) => prev + 1);
  }

  function decrementClick() {
    setCounter((prev) => prev - 1);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 border border-secondary px-4 py-6">
      <p className="font-extrabold text-4xl">{counter}</p>
      <div className="flex gap-2">
        <button onClick={incrementClick} className="bg-secondary px-8 py-1">
          +
        </button>
        <button onClick={decrementClick} className="bg-secondary px-8 py-1">
          -
        </button>
      </div>
    </div>
  );
}
