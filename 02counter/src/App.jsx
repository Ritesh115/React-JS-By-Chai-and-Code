function App() {
  let counter = 15;
  document.getElementById("button1").addEventListener("click", () => {
    console.log("clicked", Math.random());
    counter += 1;
  });

  return (
    <>
      <h1>Welcome to count game</h1>
      <h2>counter value : {counter}</h2>
      <button id="button1">Add value</button> <br />
      <button id="button2">Remove value</button>
    </>
  );
}

export default App;
