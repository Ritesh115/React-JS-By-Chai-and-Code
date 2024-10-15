import { useState } from "react";

function App() {
  // let counter = 15;
  //ysestate is called here
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    console.log("value", counter);
    counter += 1;
    setCounter(counter);
  };

  //2.
  const removeValue = () => {
    console.log("value", counter);
    counter -= 1;
    setCounter(counter);
  };

  return (
    <>
      <h1>Welcome to count game</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button> <br />
      <button onClick={removeValue}>Remove value</button>
      <p>value is {counter}</p>
    </>
  );
}

export default App;
