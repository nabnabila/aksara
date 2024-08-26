import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ho from "../../assets/audio/audio1/ho.mp3";
import contohha from "../../assets/image/aksara1/contohha.png";
import contohna from "../../assets/image/aksara1/contohna.png";
import contohca from "../../assets/image/aksara1/contohca.png";
import contohra from "../../assets/image/aksara1/contohra.png";
const SwaraNglegena = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [showHomeButton, setShowHomeButton] = useState(false);
  const navigate = useNavigate();

  // audio data
  const song = {
    audioSrc: ho,
    correctAnswer: "option2",
    options: [
      { id: "option1", imgSrc: contohha },
      { id: "option2", imgSrc: contohca },
      { id: "option3", imgSrc: contohna },
      { id: "option4", imgSrc: contohra },
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
      setFeedback("Bener!");
      setShowHomeButton(true);
    } else {
      setFeedback("Coba Maneh Yok!");
    }
  };
  const goToHomePage = () => {
    navigate("/aksaranglegena/kuis1");
  };
  return (
    <div className="sound-match-game">
      <h1>Nyocokake Swara Nglegena</h1>

      <div className="play-button-container">
        <button
          className="play-button"
          onClick={playAudio}
          disabled={isPlaying}
        >
          <i className="play-icon"></i>
        </button>
      </div>
      <div className="image-options">
        {song.options.map((option) => (
          <img
            key={option.id}
            src={option.imgSrc}
            alt={`Option ${option.id}`}
            onClick={() => handleChoiceClick(option.id)}
            className={`image-option ${
              selectedAnswer === option.id ? "selected" : ""
            }`}
          />
        ))}
      </div>

      {feedback && <p className="feedback">{feedback}</p>}
      {showHomeButton && (
        <button className="home-button" onClick={goToHomePage}>
          Kembali Ke Kuis
        </button>
      )}
    </div>
  );
};

export default SwaraNglegena;
