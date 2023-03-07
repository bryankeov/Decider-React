import React, { useState } from "react";
import "./Form.css";

function Form(props) {
  const { choices, onChoiceUpdate, isOpen, setIsOpen } = props;

  //Allow up to 8 choices
  function handleChange(index, value) {
    const updatedChoices = [...choices];
    updatedChoices[index] = value;
    onChoiceUpdate(updatedChoices);
  }
  function handleSubmit(e) {
    e.preventDefault();
    closeModal();
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleAddChoice() {
    onChoiceUpdate([...choices, ""]);
  }

  function handleDelete(index) {
    const updatedChoices = [...choices];
    updatedChoices.splice(index, 1);
    onChoiceUpdate(updatedChoices);
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
        {choices.map((choice, index) => {
          return (
            <label key={index} className="choiceLabels">
              {`Choice ${index + 1}: `}
              <input
                type="text"
                className="choiceInput"
                onChange={(e) => handleChange(index, e.target.value)}
                value={choice}
              />
              <button type="button" onClick={() => handleDelete(index)}>
                -
              </button>
            </label>
          );
        })}
        <button type="button" className="addChoice" onClick={handleAddChoice}>
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
