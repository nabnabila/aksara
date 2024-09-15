import React from "react";

const CustomClue = ({ data, onCrosswordCorrect }) => {
  // Assuming `data` contains clues and images
  return (
    <div>
      {Object.entries(data.across).map(([key, clue]) =>
        clue.clue.startsWith("img:") ? (
          <img
            src={clue.clue.replace("img:", "")}
            alt={`Clue ${key}`}
            key={key}
            className="clue-image"
          />
        ) : null
      )}
      {Object.entries(data.down).map(([key, clue]) =>
        clue.clue.startsWith("img:") ? (
          <img
            src={clue.clue.replace("img:", "")}
            alt={`Clue ${key}`}
            key={key}
            className="clue-image"
          />
        ) : null
      )}
    </div>
  );
};

export default CustomClue;
