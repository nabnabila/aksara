import React from "react";
import Crossword from "@jaredreisinger/react-crossword";
import CustomClue from "./Customclue";

const CrosswordWithCustomClues = ({ data, ...props }) => {
  const renderClues = (clues, direction) => {
    return Object.entries(clues).map(([number, clueData]) => (
      <div key={number}>
        <strong>
          {number} {direction}:
        </strong>
        <CustomClue clue={clueData.clue} />
      </div>
    ));
  };

  return (
    <div className="crossword-with-custom-clues">
      <div className="crossword-grid">
        <Crossword data={data} {...props} />
      </div>
      <div className="crossword-clues">
        <div className="across">
          <h3>Across</h3>
          {renderClues(data.across, "Across")}
        </div>
        <div className="down">
          <h3>Down</h3>
          {renderClues(data.down, "Down")}
        </div>
      </div>
    </div>
  );
};

export default CrosswordWithCustomClues;
