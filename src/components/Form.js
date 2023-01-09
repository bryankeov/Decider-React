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

  return(
    <form className="modal hidden">
      {choices.map((item, index) => {
        return (
          <label key={index + 1} id={index + 1}>
            {item}
            <input type="text" className="choices"></input>
          </label>
        );
      })}
      <button className="addChoice" onClick={addNewChoice}>+</button>
      <button type="submit" onClick={submitChoices}>Submit</button>
    </form>
  );
}

export default Form;