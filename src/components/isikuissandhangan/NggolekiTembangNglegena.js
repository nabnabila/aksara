import React, { useState, useEffect } from "react";

const WordSearch = () => {
  const [grid, setGrid] = useState([]);
  const [wordList, setWordList] = useState([
    "REACT",
    "JAVASCRIPT",
    "HTML",
    "CSS",
  ]);
  const [foundWords, setFoundWords] = useState([]);

  useEffect(() => {
    // Logika untuk membuat grid dan menempatkan kata-kata
    generateGrid();
  }, []);

  const generateGrid = () => {
    const size = 10; // Ukuran grid NxN
    const newGrid = Array(size)
      .fill()
      .map(() => Array(size).fill(""));

    // Logika untuk menempatkan kata-kata ke dalam grid
    wordList.forEach((word) => {
      // Menempatkan kata secara acak
      placeWordInGrid(newGrid, word);
    });

    // Mengisi grid dengan huruf acak untuk ruang yang kosong
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (!newGrid[i][j]) {
          newGrid[i][j] = String.fromCharCode(
            65 + Math.floor(Math.random() * 26)
          );
        }
      }
    }

    setGrid(newGrid);
  };

  const placeWordInGrid = (grid, word) => {
    // Logika untuk menempatkan kata di grid
    // Ini bisa horizontal, vertikal, atau diagonal, tergantung pada keinginan
    const size = grid.length;
    const startRow = Math.floor(Math.random() * size);
    const startCol = Math.floor(Math.random() * size);

    // Coba menempatkan kata secara horizontal
    if (startCol + word.length <= size) {
      for (let i = 0; i < word.length; i++) {
        grid[startRow][startCol + i] = word[i];
      }
    }
  };

  return (
    <div>
      <h1>Word Search Game</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${grid.length}, 40px)`,
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((letter, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: "40px",
                height: "40px",
                border: "1px solid black",
                textAlign: "center",
                lineHeight: "40px",
              }}
            >
              {letter}
            </div>
          ))
        )}
      </div>
      <div>
        <h2>Words to Find:</h2>
        <ul>
          {wordList.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WordSearch;
