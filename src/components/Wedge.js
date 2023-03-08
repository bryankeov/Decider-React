import React from "react";
import "./Wedge.css";

function Wedge(props) {
  const choices = props.choices;
  let wedgeSize = 360 / choices.length;

  return (
    <div className="wedge-container">
      {choices.map((choice, i) => {
        let transform = `rotate(${i * wedgeSize}deg) skewY(${
          wedgeSize - 90
        }deg)`;

        let textTransform = `skewY(${-(wedgeSize - 90)}deg) rotate(${
          wedgeSize / 2
        }deg) translateY(-50%) translateX(-10%)`;

        if (choices.length === 2) {
          transform = `rotate(${i * wedgeSize}deg) translateY(50%)`;
          textTransform = `TranslateY(-875%) TranslateX(300%) Rotate(90deg)`;
        } else if (choices.length === 1) {
          transform = `rotate(${
            i * wedgeSize
          }deg) translateY(50%) translateX(-50%)`;
          textTransform = `TranslateY(-1800%) TranslateX(425%)`;
        }

        return (
          <div
            key={i}
            className="wedge"
            style={{
              transform,
              backgroundColor:
                "#" +
                (0x1000000 + Math.random() * 0xffffff)
                  .toString(16)
                  .substr(1, 6),
            }}
          >
            <span
              className="wedgeText"
              style={{
                transform: textTransform,
              }}
            >
              {choice}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export default Wedge;
