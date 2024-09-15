import React from "react";
import Crossword from "@jaredreisinger/react-crossword";

const data = {
  across: {
    1: {
      clue: "one plus one",
      answer: "TWO",
      row: 0,
      col: 0,
    },
    3: {
      clue: "five plus three",
      answer: "EIGHT",
      row: 2,
      col: 2,
    },
  },
  down: {
    2: {
      clue: "three minus two",
      answer: "ONE",
      row: 0,
      col: 2,
    },
  },
};

export default function UtakAtikGathukNglegena() {
  return (
    <div className="mode">
      <div className="contain">
        <br />
        <h1 className="p-20 m-5 text-center">Utak Atik Gathuk Nglegena</h1>
        <br />
        <div className="crossword">
          <Crossword data={data} />
        </div>
      </div>
    </div>
  );
}
