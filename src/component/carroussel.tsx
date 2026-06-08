import { useState } from 'react';
import '../style/carroussel.scss';

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesCount = images.length;
  const arrowLeft = "../assets/arrow-left.svg"
  const arrowRight = "../assets/arrow-right.svg"

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === imagesCount - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? imagesCount - 1 : prev - 1));
  };

  if (imagesCount === 1) {
    return (
      <div className="carousel">
        <img src={images[0]} alt="Logement" className="carousel__image" />
      </div>
    );
  }

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt="Logement" className="carousel__image" />
      
      <button className="carousel__prev" onClick={()=>{
        prevSlide()
      }}>
        <img src={arrowLeft} alt="Précédent" />
      </button>
      <button className="carousel__next" onClick={()=>{
        nextSlide()
      }}>
        <img src={arrowRight} alt="Suivant" />
      </button>
      
      <span className="carousel__counter">
        {currentIndex + 1} / {imagesCount}
      </span>
    </div>
  );
}