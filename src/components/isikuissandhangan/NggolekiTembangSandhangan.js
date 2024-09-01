import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import lakon from "../../assets/image/kuis/lakon.png";
import sutradara from "../../assets/image/kuis/sutradara.png";
import dalang from "../../assets/image/kuis/dalang.png";
import sindhen from "../../assets/image/kuis/sindhen.png";
const NggolekiTembang = () => {
  const initialClues = [
    { word: "LAKON", image: lakon },
    { word: "SUTRADARA", image: sutradara },
    { word: "DALANG", image: dalang },
    { word: "SINDHEN", image: sindhen },
  ];

  const [gridSize, setGridSize] = useState(15);
  const [grid, setGrid] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [selectedCells, setSelectedCells] = useState([]);
  const [clues, setClues] = useState(initialClues);
  const navigate = useNavigate();

  // Utility function to create an empty grid
  const createEmptyGrid = () => {
    return Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => "")
    );
  };

  // Place words into the grid
  const placeWordsInGrid = (grid) => {
    clues.forEach((clue) => {
      const word = clue.word;
      let placed = false;
      while (!placed) {
        const direction = Math.floor(Math.random() * 3); // 0 = horizontal, 1 = vertical, 2 = diagonal
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);

        if (canPlaceWord(word, row, col, direction, grid)) {
          placeWord(word, row, col, direction, grid);
          placed = true;
        }
      }
    });
  };

  const canPlaceWord = (word, row, col, direction, grid) => {
    if (direction === 0 && col + word.length > gridSize) return false;
    if (direction === 1 && row + word.length > gridSize) return false;
    if (
      direction === 2 &&
      (row + word.length > gridSize || col + word.length > gridSize)
    )
      return false;

    for (let i = 0; i < word.length; i++) {
      const currentRow = row + (direction === 1 || direction === 2 ? i : 0);
      const currentCol = col + (direction === 0 || direction === 2 ? i : 0);
      if (
        grid[currentRow][currentCol] !== "" &&
        grid[currentRow][currentCol] !== word[i]
      ) {
        return false;
      }
    }
    return true;
  };

  const placeWord = (word, row, col, direction, grid) => {
    for (let i = 0; i < word.length; i++) {
      const currentRow = row + (direction === 1 || direction === 2 ? i : 0);
      const currentCol = col + (direction === 0 || direction === 2 ? i : 0);
      grid[currentRow][currentCol] = word[i];
    }
  };

  // Fill the remaining cells with random letters
  const fillGridWithRandomLetters = (grid) => {
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (grid[row][col] === "") {
          grid[row][col] = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
          );
        }
      }
    }
  };

  // Initialize the grid when the component mounts
  useEffect(() => {
    const newGrid = createEmptyGrid();
    placeWordsInGrid(newGrid);
    fillGridWithRandomLetters(newGrid);
    setGrid(newGrid);
  }, [clues, gridSize]);

  // Handle user selection of cells
  const handleCellClick = (row, col) => {
    const cellIndex = selectedCells.findIndex(
      (cell) => cell.row === row && cell.col === col
    );

    if (cellIndex !== -1) {
      // Deselect if already selected
      const newSelection = [...selectedCells];
      newSelection.splice(cellIndex, 1);
      setSelectedCells(newSelection);
    } else {
      // Add to selection
      setSelectedCells([...selectedCells, { row, col }]);
    }
  };

  // Clear the current selection
  const clearSelection = () => {
    setSelectedCells([]);
  };

  // Check if the selected cells form a valid word
  useEffect(() => {
    const selectedWord = selectedCells
      .map(({ row, col }) => grid[row][col])
      .join("");
    const foundClue = clues.find((clue) => clue.word === selectedWord);

    if (foundClue) {
      setFoundWords([...foundWords, foundClue.word]);
      setSelectedCells([]);
    }
  }, [selectedCells]);
  const allWordsFound = foundWords.length === clues.length;

  const goToNextPage = () => {
    navigate("/Sandhangan/kuis5/ngaturukarasandhangan");
  };

  return (
    <div className="wordsearch">
      <h1>Nggoleki Tembang Sandhangan</h1>
      <h2>Goleki tembung sing cocog karo aksara sing ditampilake</h2>

      <div className="wordsearch-clues">
        {clues.map((clue, index) => (
          <div key={index} className="wordsearch-clue">
            <img src={clue.image} alt={clue.word} style={{ width: "50px" }} />
          </div>
        ))}
      </div>

      <div className="wordsearch-container">
        <div className="wordsearch-grid" style={{ "--grid-size": gridSize }}>
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="wordsearch-row">
              {row.map((letter, colIndex) => (
                <div
                  key={colIndex}
                  className={`cell ${
                    selectedCells.find(
                      (c) => c.row === rowIndex && c.col === colIndex
                    )
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                >
                  {letter}
                </div>
              ))}
            </div>
          ))}
        </div>

        <button onClick={clearSelection}>Clear Selection</button>
        <div className="wordsearch-found-words">
          <h2>Kata:</h2>
          {foundWords.map((word, index) => (
            <div key={index}>{word}</div>
          ))}

          {allWordsFound && (
            <button onClick={goToNextPage} className="next-page-button">
              Next Page
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NggolekiTembang;
