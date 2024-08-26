import React from "react";
import Crossword from "@jaredreisinger/react-crossword";
import { useNavigate } from "react-router-dom";

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
export default function UtakAtikGathukMurda() {
  const [isCorrect, setIsCorrect] = useState(false);
  const navigate = useNavigate();

  const handleCrosswordCorrect = () => {
    setIsCorrect(true);
  };

  const handleNextPage = () => {
    navigate("/aksaramurda/kuis3/nyocokakegambarmurda");
  };

  return (
    <div className="contain">
      <br />
      <h1 className="p-20 m-5 text-center">Utak Atik Gathuk Murda</h1>
      <br />
      <div className="crossword">
        <Crossword data={data} onCrosswordCorrect={handleCrosswordCorrect} />
      </div>
      {isCorrect && (
        <div className="text-center">
          <button onClick={handleNextPage} className="btn btn-primary mt-4">
            Next Page
          </button>
        </div>
      )}
    </div>
  );
}
