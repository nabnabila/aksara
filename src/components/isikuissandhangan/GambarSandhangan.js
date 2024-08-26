import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import ha from "../../assets/image/aksara1/contohha.png";
import na from "../../assets/image/aksara1/contohna.png";
import ca from "../../assets/image/aksara1/contohca.png";
import ra from "../../assets/image/aksara1/contohra.png";
import ka from "../../assets/image/aksara1/contohka.png";

const NyocokakeGambar = ({ nextPagePath }) => {
  // Accept nextPagePath as a prop
  const navigate = useNavigate(); // Initialize useNavigate

  // Define the pairs with an image as the clue
  const pairs = [
    {
      clueImage: ha,
      options: [
        { id: 1, image: na, isCorrect: true },
        { id: 2, image: ca, isCorrect: false },
        { id: 3, image: ra, isCorrect: false },
        { id: 4, image: ka, isCorrect: false },
      ],
    },
  ];

  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const currentPair = pairs[currentPairIndex];

  // Handle the selection of an image
  const handleImageClick = (option) => {
    setSelectedImage(option.id);
    setIsAnswerCorrect(option.isCorrect);
  };

  // Handle moving to the next question or page
  const handleNext = () => {
    if (currentPairIndex < pairs.length - 1) {
      setSelectedImage(null);
      setIsAnswerCorrect(null);
      setCurrentPairIndex(currentPairIndex + 1);
    } else {
      // Navigate to the path provided in nextPagePath prop
      navigate(nextPagePath);
    }
  };

  return (
    <div className="mode">
      <div className="clue-container">
        <h1>Pilihlah gambar yang sesuai dengan</h1>
        <img src={currentPair.clueImage} alt="Clue" className="clue-image" />
        <div className="image-container">
          {currentPair.options.map((option) => (
            <img
              key={option.id}
              src={option.image}
              alt="Option"
              className={selectedImage === option.id ? "selected" : ""}
              onClick={() => handleImageClick(option)}
            />
          ))}
        </div>
        {isAnswerCorrect !== null && (
          <div>
            <p
              className={`feedback-message ${
                isAnswerCorrect ? "" : "incorrect"
              }`}
            >
              {isAnswerCorrect ? "Bener!" : "Coba Maneh Yok!"}
            </p>
            {isAnswerCorrect && (
              <button className="next-button" onClick={handleNext}>
                Next
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NyocokakeGambar;
