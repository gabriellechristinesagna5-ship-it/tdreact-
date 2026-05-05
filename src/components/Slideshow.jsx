import { useState } from 'react';
import leftArrow from '../assets/vector_left.png';
import rightArrow from '../assets/vector_right.png';

function Slideshow({ pictures, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultiplePictures = pictures.length > 1;

  const goPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="slideshow">
      <div
        className="slideshow-container"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {pictures.map((picture, index) => (
          <img
            key={`${title}-${index}`}
            className="slideshow-container-img"
            src={picture}
            alt={`${title} ${index + 1}`}
          />
        ))}
      </div>

      {hasMultiplePictures ? (
        <>
          <div className="slideshow-controls">
            <button type="button" className="slideshow-button" onClick={goPrevious}>
              <img className="slideshow-controls-chevron" src={leftArrow} alt="Image précédente" />
            </button>
            <button type="button" className="slideshow-button" onClick={goNext}>
              <img className="slideshow-controls-chevron" src={rightArrow} alt="Image suivante" />
            </button>
          </div>
          <p className="slideshow-idx">
            {currentIndex + 1} / {pictures.length}
          </p>
        </>
      ) : null}
    </section>
  );
}

export default Slideshow;
