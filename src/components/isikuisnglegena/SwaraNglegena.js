import React, { useState } from "react";

const SoundMatchGame = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");

  // Example data
  const song = {
    audioSrc: "/path-to-audio-file.mp3",
    correctAnswer: "option3",
    options: [
      { id: "option1", imgSrc: "/path-to-image1.jpg" },
      { id: "option2", imgSrc: "/path-to-image2.jpg" },
      { id: "option3", imgSrc: "/path-to-image3.jpg" },
      { id: "option4", imgSrc: "/path-to-image4.jpg" },
    ],
  };

  const playAudio = () => {
    const audio = new Audio(song.audioSrc);
    audio.play();
    setIsPlaying(true);

    // Stop audio after it's finished playing
    audio.onended = () => {
      setIsPlaying(false);
    };
  };

  const handleChoiceClick = (optionId) => {
    setSelectedAnswer(optionId);
    if (optionId === song.correctAnswer) {
      setFeedback("Correct!");
    } else {
      setFeedback("Try again!");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Sound Match Game</h1>

      <button onClick={playAudio} disabled={isPlaying}>
        {isPlaying ? "Playing..." : "Play Sound"}
      </button>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        {song.options.map((option) => (
          <img
            key={option.id}
            src={option.imgSrc}
            alt={`Option ${option.id}`}
            onClick={() => handleChoiceClick(option.id)}
            style={{
              width: "100px",
              height: "100px",
              margin: "0 10px",
              cursor: "pointer",
              border: selectedAnswer === option.id ? "3px solid blue" : "none",
            }}
          />
        ))}
      </div>

      {feedback && (
        <p style={{ marginTop: "20px", fontSize: "18px", color: "green" }}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default SoundMatchGame;
