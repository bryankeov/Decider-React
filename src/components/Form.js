import React, {useState} from "react";
import "./Form.css";

function Form(props) {
  const choices = props.choices
  const setChoices = props.setChoices

  //Allow up to 8 choices
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

  //On submit, each added choice input is added to the wheel
  function submitChoices(e) {
    const choiceInput = document.getElementsByClassName("choiceInput")
    let choicesArr = [];
    e.preventDefault();

    for(let i = 0; i < choiceInput.length; i++) {
      if(choiceInput[i].value) {
        choicesArr.push(choiceInput[i].value)
      } else {
        choicesArr.push(`Choice ${i + 1}`)
      }
    }

    setChoices(choicesArr);
    closeModal();
  }

  //Close pop up window for choice selection
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
              {`Choice ${index + 1}: `}
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