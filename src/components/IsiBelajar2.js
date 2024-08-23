import React, { useState } from "react";
// Import audios
import ha from "../assets/image/aksara2/Pasanganha.png";
import na from "../assets/image/aksara2/Pasanganna.png";
import ca from "../assets/image/aksara2/Pasanganca.png";
import ra from "../assets/image/aksara2/Pasanganra.png";
import ka from "../assets/image/aksara2/Pasanganka.png";
import da from "../assets/image/aksara2/Pasanganda.png";
import ta from "../assets/image/aksara2/Pasanganta.png";
import sa from "../assets/image/aksara2/Pasangansa.png";
import wa from "../assets/image/aksara2/Pasanganwa.png";
import la from "../assets/image/aksara2/Pasanganla.png";
import pa from "../assets/image/aksara2/Pasanganpa.png";
import dha from "../assets/image/aksara2/Pasangandha.png";
import ja from "../assets/image/aksara2/Pasanganja.png";
import ya from "../assets/image/aksara2/Pasanganya.png";
import nya from "../assets/image/aksara2/Pasangannya.png";
import ma from "../assets/image/aksara2/Pasanganma.png";
import ga from "../assets/image/aksara2/Pasanganga.png";
import ba from "../assets/image/aksara2/Pasanganba.png";
import tha from "../assets/image/aksara2/Pasangantha.png";
import nga from "../assets/image/aksara2/Pasangannga.png";
import contohha from "../assets/image/aksara2/contohha.png";
import contohna from "../assets/image/aksara2/contohna.png";
import contohca from "../assets/image/aksara2/contohca.png";
import contohra from "../assets/image/aksara2/contohra.png";
import contohka from "../assets/image/aksara2/contohka.png";
import contohda from "../assets/image/aksara2/contohda.png";
import contohta from "../assets/image/aksara2/contohta.png";
import contohsa from "../assets/image/aksara2/contohsa.png";
import contohwa from "../assets/image/aksara2/contohwa.png";
import contohla from "../assets/image/aksara2/contohla.png";
import contohpa from "../assets/image/aksara2/contohpa.png";
import contohdha from "../assets/image/aksara2/contohdha.png";
import contohja from "../assets/image/aksara2/contohja.png";
import contohya from "../assets/image/aksara2/contohya.png";
import contohnya from "../assets/image/aksara2/contohnya.png";
import contohma from "../assets/image/aksara2/contohma.png";
import contohga from "../assets/image/aksara2/contohga.png";
import contohba from "../assets/image/aksara2/contohba.png";
import contohtha from "../assets/image/aksara2/contohtha.png";
import contohnga from "../assets/image/aksara2/contohnga.png";
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

const IsiBelajar2 = () => {
  const cards = [
    {
      title: "Pasangan Ha",
      description: "Contoh:",
      image: ha,
      images: contohha,
      example: "aben ajeng",
      buttonText: "Pelafalan",
      audio: ho,
    },
    {
      title: "Pasangan Na",
      description: "Contoh:",
      image: na,
      images: contohna,
      example: "nanem nanas",
      buttonText: "Pelafalan",
      audio: no,
    },
    {
      title: "Pasangan Ca",
      description: "Contoh:",
      image: ca,
      images: contohca,
      example: "cepak-cepak",
      buttonText: "Pelafalan",
      audio: co,
    },
    {
      title: "Pasangan Ra",
      description: "Contoh:",
      image: ra,
      images: contohra,
      example: "ragad roti",
      buttonText: "Pelafalan",
      audio: ro,
    },
    {
      title: "Pasangan Ka",
      description: "Contoh:",
      image: ka,
      images: contohka,
      example: "kapuk kapas",
      buttonText: "Pelafalan",
      audio: ko,
    },
    {
      title: "Pasangan Da",
      description: "Contoh:",
      image: da,
      images: contohda,
      example: "dalan-dalan",
      buttonText: "Pelafalan",
      audio: doo,
    },
    {
      title: "Pasangan Ta",
      description: "Contoh:",
      image: ta,
      images: contohta,
      example: "tapak tilas",
      buttonText: "Pelafalan",
      audio: to,
    },
    {
      title: "Pasangan Sa",
      description: "Contoh:",
      image: sa,
      images: contohsa,
      example: "sanak sedulur",
      buttonText: "Pelafalan",
      audio: so,
    },
    {
      title: "Pasangan Wa",
      description: "Contoh:",
      image: wa,
      images: contohwa,
      example: "watuk-watuk",
      buttonText: "Pelafalan",
      audio: wo,
    },
    {
      title: "Pasangan La",
      description: "Contoh:",
      image: la,
      images: contohla,
      example: "lamat-lamat",
      buttonText: "Pelafalan",
      audio: lo,
    },
    {
      title: "Pasangan Pa",
      description: "Contoh:",
      image: pa,
      images: contohpa,
      example: "panen pari",
      buttonText: "Pelafalan",
      audio: po,
    },
    {
      title: "Pasangan Dha",
      description: "Contoh:",
      image: dha,
      images: contohdha,
      example: "dhandhang",
      buttonText: "Pelafalan",
      audio: dho,
    },
    {
      title: "Pasangan Ja",
      description: "Contoh:",
      image: ja,
      images: contohja,
      example: "jajal-jajal",
      buttonText: "Pelafalan",
      audio: jo,
    },
    {
      title: "Pasangan Ya",
      description: "Contoh:",
      image: ya,
      images: contohya,
      example: " yakin yekti",
      buttonText: "Pelafalan",
      audio: yo,
    },
    {
      title: "Pasanngan Nya",
      description: "Contoh:",
      image: nya,
      images: contohnya,
      example: "nyamut-nyamut",
      buttonText: "Pelafalan",
      audio: nyo,
    },
    {
      title: "Pasangan Ma",
      description: "Contoh:",
      image: ma,
      images: contohma,
      example: "manggut manggut",
      buttonText: "Pelafalan",
      audio: mo,
    },
    {
      title: "Pasangan Ga",
      description: "Contoh:",
      image: ga,
      images: contohga,
      example: "gagap gagap",
      buttonText: "Pelafalan",
      audio: go,
    },
    {
      title: "Pasangan Ba",
      description: "Contoh:",
      image: ba,
      images: contohba,
      example: "bal-balan",
      buttonText: "Pelafalan",
      audio: bo,
    },
    {
      title: "Pasangan Tha",
      description: "Contoh:",
      image: tha,
      images: contohtha,
      example: "thak-thakan",
      buttonText: "Pelafalan",
      audio: tho,
    },
    {
      title: "Pasangan Nga",
      description: "Contoh:",
      image: nga,
      images: contohnga,
      example: "ngajak ngaso",
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

export default IsiBelajar2;
