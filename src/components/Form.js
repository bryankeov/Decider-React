import React, {useState} from "react";

function Form() {
  const [choices, setChoices] = useState(["Choice 1", "Choice 2"])

  function addNewChoice(e) {
    e.preventDefault()
    const index = choices.length + 1;
    setChoices([
      ...choices,
      `Choice ${index}`
    ])
  }

  return(
    <form>
      {choices.map((item, index) => {
        return (
          <label key={index + 1} id={index + 1}>
            {item}
            <input type="text" className="choices"></input>
          </label>
        );
      })}
      <button className="addChoice" onClick={addNewChoice}>+</button>
    </form>
  );
}

export default Form;