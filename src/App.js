import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import Wheel from "./components/Wheel";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [choices, setChoices] = useState([
    "Pizza",
    "Burgers",
    "Fried Chicken",
    "KBBQ",
  ]);

  return (
    <div className="App">
      <Header setIsOpen={setIsOpen} setChoices={setChoices} />
      <Wheel choices={choices} />
      <Form
        choices={choices}
        setChoices={setChoices}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}

export default App;
