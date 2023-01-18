import React, {useState} from "react";
import './App.css';
import Header from "./components/Header"
import Form from "./components/Form"
import Wheel from "./components/Wheel"

function App() {
  const [choices, setChoices] = useState(["Choice 1", "Choice 2"])

  return (
    <div className="App">
      <Header/>
      <Wheel
      choices={choices}
      />
      <Form
      choices={choices}
      setChoices={setChoices}
      />
    </div>
  );
}

export default App;
