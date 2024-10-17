import { useState, useCallback } from "react";
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

    for (let i = 0; i <= Array.length; i++) {
      const 
    }
  }, [length, numberAllowed, charAllowed, setpassword]);
  return (
    <>
      <h1
        className="text-4xl text-center 
   text-white"
      >
        Password generator
      </h1>
    </>
  );
}

export default App;
