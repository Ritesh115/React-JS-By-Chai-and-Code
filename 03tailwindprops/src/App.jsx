import "./App.css";
import Card from "../component/Card";

function App() {
  const obj = {
    name: "ritesh",
    age: 24,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind</h1>
      <Card username="chaii" myObj={obj} />
      <Card username="Ritesh" stateName="Assam" />
    </>
  );
}

export default App;
