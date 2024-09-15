import React, { useState } from "react";
// Import audios
import na from "../assets/image/aksara4/Pasanganna.png";
import ka from "../assets/image/aksara4/Pasanganka.png";
import ta from "../assets/image/aksara4/Pasanganta.png";
import sa from "../assets/image/aksara4/Pasangansa.png";
import pa from "../assets/image/aksara4/Pasanganpa.png";
import nya from "../assets/image/aksara4/Pasangannya.png";
import ga from "../assets/image/aksara4/Pasanganga.png";
import ba from "../assets/image/aksara4/Pasanganba.png";
import contohna from "../assets/image/aksara4/contohna.png";
import contohka from "../assets/image/aksara4/contohka.png";
import contohta from "../assets/image/aksara4/contohta.png";
import contohsa from "../assets/image/aksara4/contohsa.png";
import contohpa from "../assets/image/aksara4/contohpa.png";
import contohnya from "../assets/image/aksara4/contohnya.png";
import contohga from "../assets/image/aksara4/contohga.png";
import contohba from "../assets/image/aksara4/contohba.png";

// Import audios
import no from "../assets/audio/audio1/no.mp3";
import ko from "../assets/audio/audio1/ko.mp3";
import to from "../assets/audio/audio1/to.mp3";
import so from "../assets/audio/audio1/so.mp3";
import po from "../assets/audio/audio1/po.mp3";
import nyo from "../assets/audio/audio1/nyo.mp3";
import go from "../assets/audio/audio1/go.mp3";
import bo from "../assets/audio/audio1/bo.mp3";

const IsiBelajar4 = () => {
  const cards = [
    {
      title: "Na",
      description: "Contoh:",
      image: na,
      images: contohna,
      example: "Nurman Natanagara",
      buttonText: "Pelafalan",
      audio: no,
    },
    {
      title: "Ka",
      description: "Contoh:",
      image: ka,
      images: contohka,
      example: "Kabupaten Kudus",
      buttonText: "Pelafalan",
      audio: ko,
    },

    {
      title: "Ta",
      description: "Contoh:",
      image: ta,
      images: contohta,
      example: "Tuwan Tantri",
      buttonText: "Pelafalan",
      audio: to,
    },
    {
      title: "Sa",
      description: "Contoh:",
      image: sa,
      images: contohsa,
      example: "Kabupaten Sampang",
      buttonText: "Pelafalan",
      audio: so,
    },
    {
      title: "Pa",
      description: "Contoh:",
      image: pa,
      images: contohpa,
      example: "Pangeran Pekik",
      buttonText: "Pelafalan",
      audio: po,
    },
    {
      title: "Nya",
      description: "Contoh:",
      image: nya,
      images: contohnya,
      example: "Rian Nyoman",
      buttonText: "Pelafalan",
      audio: nyo,
    },
    {
      title: "Ga",
      description: "Contoh:",
      image: ga,
      images: contohga,
      example: "Raden Gandamana",
      buttonText: "Pelafalan",
      audio: go,
    },
    {
      title: "Ba",
      description: "Contoh:",
      image: ba,
      images: contohba,
      example: "Babad Banyuwangi",
      buttonText: "Pelafalan",
      audio: bo,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };
  const playAudio = (audioFile) => {
    const audio = new Audio(audioFile);
    audio.play();
  };
  return (
    <div className="mode">
      <div className="carousel-container">
        <button onClick={prevCard}>‹</button>
        <div className="card">
          <h2>{cards[currentIndex].title}</h2>
          <img src={cards[currentIndex].image} alt="Card" />
          <h3 className="m-5">{cards[currentIndex].description}</h3>
          <img src={cards[currentIndex].images} alt="Card" />
          <h4>{cards[currentIndex].example}</h4>
          <button onClick={() => playAudio(cards[currentIndex].audio)}>
            {cards[currentIndex].buttonText}
          </button>
        </div>
        <button onClick={nextCard}>›</button>
      </div>
    </div>
  );
};

export default IsiBelajar4;
