import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(1);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setpassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    //nymbercondition
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()+-*/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberAllowed, charAllowed, setpassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 
       py-8 my-8 text-orange-500 bg-gray-700"
      >
        <h1 className="text-white text-center">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={Password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button className="outline-none  bg-blue-700 text-white px-3 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={(e) => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={(e) => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
