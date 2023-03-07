import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const choices = props.choices;
  const setChoices = props.setChoices;
  const isOpen = props.isOpen;
  const setIsOpen = props.setIsOpen;

  const [numInputs, setNumInputs] = useState([1, 2]);
  const [inputText, setInputText] = useState("");

  //Allow up to 8 choices
  function addChoice(e) {
    const index = numInputs.length + 1;
    e.preventDefault();

    setNumInputs([...numInputs, index]);
  }

  function handleChange(e) {
    setInputText([...inputText, e.target.value]);
  }

  function onBlurChange() {}

  function handleSubmit(e) {
    e.preventDefault();

    setChoices(inputText);
    closeModal();
  }

  //Close pop up window for choice selection
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <form
        className={`modal ${isOpen ? "" : "hidden"}`}
        onSubmit={handleSubmit}
      >
        <button type="button" className="btn-close" onClick={closeModal}>
          X
        </button>
        <p>Add your choices below!</p>
        {numInputs.map((item, index) => {
          return (
            <label key={index + 1} className="choiceLabels">
              {`Choice ${index + 1}: `}
              <input
                type="text"
                className="choiceInput"
                onChange={handleChange}
              />
            </label>
          );
        })}
        <button className="addChoice" onClick={addChoice}>
          +
        </button>
        <button type="submit">Submit</button>
      </form>
      <div
        className={`overlay ${isOpen ? "" : "hidden"}`}
        onClick={closeModal}
      ></div>
    </div>
  );
}

export default Form;
