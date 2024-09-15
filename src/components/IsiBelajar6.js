import React, { useState } from "react";
// Import audios
import ha from "../assets/image/aksara1/ha.png";
import na from "../assets/image/aksara1/na.png";
import ca from "../assets/image/aksara1/ca.png";
import ra from "../assets/image/aksara1/ra.png";
import ka from "../assets/image/aksara1/ka.png";
import da from "../assets/image/aksara1/da.png";
import ta from "../assets/image/aksara1/ta.png";
import sa from "../assets/image/aksara1/sa.png";
import wa from "../assets/image/aksara1/wa.png";
import la from "../assets/image/aksara1/la.png";
import pa from "../assets/image/aksara1/pa.png";
import dha from "../assets/image/aksara1/dha.png";
import ja from "../assets/image/aksara1/ja.png";
import ya from "../assets/image/aksara1/ya.png";
import nya from "../assets/image/aksara1/nya.png";
import ma from "../assets/image/aksara1/ma.png";
import ga from "../assets/image/aksara1/ga.png";
import ba from "../assets/image/aksara1/ba.png";
import tha from "../assets/image/aksara1/tha.png";
import nga from "../assets/image/aksara1/nga.png";
// Import audios
import ho from "../assets/audio/audio1/ho.mp3";
import no from "../assets/audio/audio1/no.mp3";
import co from "../assets/audio/audio1/co.mp3";
import ro from "../assets/audio/audio1/ro.mp3";
import ko from "../assets/audio/audio1/ko.mp3";
import doo from "../assets/audio/audio1/do.mp3";
import to from "../assets/audio/audio1/to.mp3";
import so from "../assets/audio/audio1/so.mp3";
import wo from "../assets/audio/audio1/wo.mp3";
import lo from "../assets/audio/audio1/lo.mp3";
import po from "../assets/audio/audio1/po.mp3";
import dho from "../assets/audio/audio1/dho.mp3";
import jo from "../assets/audio/audio1/jo.mp3";
import yo from "../assets/audio/audio1/yo.mp3";
import nyo from "../assets/audio/audio1/nyo.mp3";
import mo from "../assets/audio/audio1/mo.mp3";
import go from "../assets/audio/audio1/go.mp3";
import bo from "../assets/audio/audio1/bo.mp3";
import tho from "../assets/audio/audio1/to.mp3";
import ngo from "../assets/audio/audio1/ngo.mp3";

const IsiBelajar1 = () => {
  const cards = [
    {
      title: "Ha",
      description: "Contoh:",
      image: ha,
      buttonText: "Pelafalan",
      audio: ho,
    },
    {
      title: "Na",
      description: "Contoh:",
      image: na,
      buttonText: "Pelafalan",
      audio: no,
    },
    {
      title: "Ca",
      description: "Contoh:",
      image: ca,
      buttonText: "Pelafalan",
      audio: co,
    },
    {
      title: "Ra",
      description: "Contoh:",
      image: ra,
      buttonText: "Pelafalan",
      audio: ro,
    },
    {
      title: "Ka",
      description: "Contoh:",
      image: ka,
      buttonText: "Pelafalan",
      audio: ko,
    },
    {
      title: "Da",
      description: "Contoh:",
      image: da,
      buttonText: "Pelafalan",
      audio: doo,
    },
    {
      title: "Ta",
      description: "Contoh:",
      image: ta,
      buttonText: "Pelafalan",
      audio: to,
    },
    {
      title: "Sa",
      description: "Contoh:",
      image: sa,
      buttonText: "Pelafalan",
      audio: so,
    },
    {
      title: "Wa",
      description: "Contoh:",
      image: wa,
      buttonText: "Pelafalan",
      audio: wo,
    },
    {
      title: "La",
      description: "Contoh:",
      image: la,
      buttonText: "Pelafalan",
      audio: lo,
    },
    {
      title: "Pa",
      description: "Contoh:",
      image: pa,
      buttonText: "Pelafalan",
      audio: po,
    },
    {
      title: "Dha",
      description: "Contoh:",
      image: dha,
      buttonText: "Pelafalan",
      audio: dho,
    },
    {
      title: "Ja",
      description: "Contoh:",
      image: ja,
      buttonText: "Pelafalan",
      audio: jo,
    },
    {
      title: "Ya",
      description: "Contoh:",
      image: ya,
      buttonText: "Pelafalan",
      audio: yo,
    },
    {
      title: "Nya",
      description: "Contoh:",
      image: nya,
      buttonText: "Pelafalan",
      audio: nyo,
    },
    {
      title: "Ma",
      description: "Contoh:",
      image: ma,
      buttonText: "Pelafalan",
      audio: mo,
    },
    {
      title: "Ga",
      description: "Contoh:",
      image: ga,
      buttonText: "Pelafalan",
      audio: go,
    },
    {
      title: "Ba",
      description: "Contoh:",
      image: ba,
      buttonText: "Pelafalan",
      audio: bo,
    },
    {
      title: "Tha",
      description: "Contoh:",
      image: tha,
      buttonText: "Pelafalan",
      audio: tho,
    },
    {
      title: "Nga",
      description: "Contoh:",
      image: nga,
      buttonText: "Pelafalan",
      audio: ngo,
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
          <button onClick={() => playAudio(cards[currentIndex].audio)}>
            {cards[currentIndex].buttonText}
          </button>
        </div>
        <button onClick={nextCard}>›</button>
      </div>
    </div>
  );
};

export default IsiBelajar1;
