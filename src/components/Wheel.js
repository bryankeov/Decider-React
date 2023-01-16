import "./Wheel.css";

function Wheel(props) {
  const choices = props.choices

  const wheelContainer = document.querySelector(".wheel-container");
  const spinBtn = document.getElementById('spin');
  let num = Math.ceil(Math.random() * 1000);

  function spinWheel() {
    wheelContainer.style.transform = "Rotate(" + num + "deg)";
    num += Math.ceil(Math.random() * 1000);
  }

  return (
    <div className="wheel">
      <button id="spin" onClick={spinWheel}>Spin</button>
      <div className="arrow"></div>
      <div className="wheel-container">
        {choices.map((item, index) => {
          return (
            <div key={index+1} className={`choice${index+1}`}>{item}</div>
          )
        })}
      </div>
    </div>
  )
}

export default Wheel;