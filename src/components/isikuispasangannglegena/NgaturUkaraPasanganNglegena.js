import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import contohta from "../../assets/image/aksara1/contohta.png";
import contohca from "../../assets/image/aksara1/contohca.png";
import contohga from "../../assets/image/aksara1/contohga.png";

// Example question and images
const question = "Atur Kata dengan benar";
const images = [
  { id: 1, src: contohca, isCorrect: true },
  { id: 2, src: contohga, isCorrect: true },
  { id: 3, src: contohta, isCorrect: false },
];

function NgaturUkara() {
  const [shuffledImages, setShuffledImages] = useState(
    shuffleArray([...images])
  );
  const [userArrangement, setUserArrangement] = useState([]);
  const [feedback, setFeedback] = useState(null); // Feedback state
  const navigate = useNavigate(); // Initialize useNavigate

  // Shuffle function
  function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  // Handle image click
  function handleImageClick(image) {
    if (!userArrangement.includes(image)) {
      setUserArrangement((prev) => [...prev, image]);
    }
  }

  // Handle rearrangement
  function handleRearrange(index, newIndex) {
    const updatedArrangement = [...userArrangement];
    const [movedImage] = updatedArrangement.splice(index, 1);
    updatedArrangement.splice(newIndex, 0, movedImage);
    setUserArrangement(updatedArrangement);
  }

  // Check the arrangement
  function checkArrangement() {
    const correctOrder = images.filter((img) => img.isCorrect);
    if (
      JSON.stringify(userArrangement.map((img) => img.id)) ===
      JSON.stringify(correctOrder.map((img) => img.id))
    ) {
      setFeedback("Bener!"); // Correct feedback
    } else {
      setFeedback("Coba Maneh Yuk!"); // Incorrect feedback
    }
  }

  // Clear the user's selection
  function clearSelection() {
    setUserArrangement([]);
  }

  // Reshuffle the images
  function reshuffleImages() {
    setShuffledImages(shuffleArray([...images]));
    clearSelection();
  }

  // Navigate to the next page
  function goToNextPage() {
    navigate("/pasanganaksaranglegena/kuis2/utakatikgathukpasangannglegena"); // Use navigate instead of history.push
  }

  return (
    <div className="arrangewords">
      <h1>Ngatur Ukara PAsangan Aksara Nglegena</h1>
      <p className="question-text">{question}</p> {/* Styled question */}
      <div className="arrangewords-image-list">
        {shuffledImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Image ${index}`}
            onClick={() => handleImageClick(image)}
            className="image"
            style={{
              cursor: "pointer",
              opacity: userArrangement.includes(image) ? 0.5 : 1,
            }}
          />
        ))}
      </div>
      <div className="arrangewords-user-arrangement">
        {userArrangement.map((image, index) => (
          <div
            key={index}
            className="arrangewords-arranged-image"
            draggable
            onDragStart={(e) => e.dataTransfer.setData("text/plain", index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) =>
              handleRearrange(e.dataTransfer.getData("text/plain"), index)
            }
          >
            <img
              src={image.src}
              alt={`User Arrangement ${index}`}
              className="arrangewords-arranged-image-img"
            />
          </div>
        ))}
      </div>
      <div className="arrangewords-buttons">
        <button onClick={checkArrangement}>Check Arrangement</button>
        <button onClick={clearSelection}>Clear Selection</button>
        <button onClick={reshuffleImages}>Reshuffle Images</button>
      </div>
      {feedback && <p className="feedback">{feedback}</p>}{" "}
      {/* Feedback display */}
      {feedback === "Bener!" && (
        <button onClick={goToNextPage}>Next</button> // Next button if correct
      )}
    </div>
  );
}

export default NgaturUkara;
