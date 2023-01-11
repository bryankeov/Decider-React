import React, {useState} from "react";
import "./Form.css";

function Form() {
  const [choices, setChoices] = useState(["Choice 1", "Choice 2"])

  function addNewChoice(e) {
    e.preventDefault()
    const index = choices.length + 1;
    setChoices([
      ...choices,
      `Choice: ${index}`
    ])
  }

  function submitChoices(e) {
    e.preventDefault();

  }

  function closeModal(e) {
    const modal = document.querySelector(".modal")
    const overlay = document.querySelector(".overlay")

    e.preventDefault();
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }

  return(
    <div>
      <form className="modal">
        <button className="btn-close" onClick={closeModal}>X</button>
        <p>Add your choices below!</p>
        {choices.map((item, index) => {
          return (
            <label key={index + 1} id={index + 1}>
              {`${item}: `}
              <input type="text" className="choices"></input>
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