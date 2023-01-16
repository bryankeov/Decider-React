import React, {useState} from "react";
import "./Form.css";

function Form(props) {
  const choices = props.choices
  const setChoices = props.setChoices

  function addNewChoice(e) {
    e.preventDefault()
    const index = choices.length + 1;
    choices.length < 8 
    ? setChoices([
      ...choices,
      `Choice: ${index}`
    ])
    : alert("Max amount reached")
  }

  function submitChoices(e) {
    const choiceInput = document.getElementsByClassName("choiceInput")
    let choicesArr = [];
    e.preventDefault();


    for(let i = 0; i < choiceInput.length; i++) {
      choicesArr.push(choiceInput[i].value)
    }

    setChoices(choicesArr);
    closeModal();
  }


  function closeModal() {
    const modal = document.querySelector(".modal")
    const overlay = document.querySelector(".overlay")

    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  return(
    <div>
      <form className="modal">
        <button type="button" className="btn-close" onClick={closeModal}>X</button>
        <p>Add your choices below!</p>
        {choices.map((item, index) => {
          return (
            <label key={index + 1} className="choiceLabels">
              {`${item}: `}
              <input type="text" className="choiceInput"></input>
            </label>
          );
        })}
        <button className="addChoice" onClick={addNewChoice}>+</button>
        <button type="submit" onClick={submitChoices}>Submit</button>
      </form>
      <div className="overlay" onClick={closeModal}></div>
    </div>
  );
}

export default Form;