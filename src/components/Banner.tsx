import React, { useState, useEffect } from 'react';
import video from "../../public/images/video.mp4";
import img2 from "../../public/images/imagen2.jpg";
import imagen from "../../public/images/imagenn.jpg";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
interface AdMedia {
  type: 'image' | 'video';
  source: string;
  text: string;
  buttonLink: string;
}

const adMedia: AdMedia[] = [
  {
    type: 'video', // Ahora es un video
    source: video,
    text: 'Tus deseos hechos realidad',
    buttonLink: '#',
  },
  {
    type: 'image',
    source: img2,
    text: 'Descubre muchos más, aquí',
    buttonLink: '#',
  },
  {
    type: 'image',
    source: imagen,
    text: 'Aprovecha grandes descuentos ',
    buttonLink: '#',
  }
];

const textColors = ['#234a9e', '#234a9e', '#234a9e'];

const ImageSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Precarga todas las imágenes al montar el componente
    useEffect(() => {
      adMedia.forEach((media) => {
        if (media.type === 'image') {
          const img = new Image();
          img.src = media.source;
        }
      });
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        goToNext();
      }, 5000);
  
      return () => clearInterval(interval); 
    }, [currentIndex]);
  
    const goToPrevious = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? adMedia.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const goToNext = () => {
      const isLastSlide = currentIndex === adMedia.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    return (
      <div className="slider">
        <div className="slider-media">
          {adMedia[currentIndex].type === 'image' ? (
            <img src={adMedia[currentIndex].source} alt="Media" />
          ) : (
            <video autoPlay loop muted>
              <source src={adMedia[currentIndex].source} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          <div
            className="slider-text"
            style={{ color: textColors[currentIndex] }}
          >
            <p>{adMedia[currentIndex].text}</p>
            <a href={adMedia[currentIndex].buttonLink} className="slider-button">
              VER MÁS
            </a>
          </div>
        </div>
        <div className="slider-buttons">
          <button onClick={goToPrevious}><FaArrowLeft /></button>
          <button onClick={goToNext}><FaArrowRight /></button>
        </div>
      </div>
    );
  };

export default ImageSlider;
