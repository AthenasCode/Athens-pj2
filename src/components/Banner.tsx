import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Error from "../components/Error"; // Importa el componente Error
import spinner from "../../public/images/Loading_2.gif"; // Importa el spinner de carga
import { useGetHomeBanners } from "../hooks/useGetHomeBanners";
import { Banner } from '../types/banners.type';

interface AdMedia {
  type: 'image' | 'video';
  source: string;
  text: string;
  buttonLink: string;
}

const textColors = ['#234a9e', '#234a9e', '#234a9e', '#234a9e'];

const ImageSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [adMedia, setAdMedia] = useState<AdMedia[]>([]);
  const [preloaded, setPreloaded] = useState(false);  // Para manejar la precarga

  // Obtención de banners usando useGetHomeBanners
  const { isLoading, isSuccess, isError, data: homepageItems } = useGetHomeBanners();

  // Formatear los banners solo si la consulta es exitosa
  useEffect(() => {
    if (isSuccess) {
      const formattedBanners: AdMedia[] = homepageItems.map((banner: Banner) => ({
        type: banner.image.endsWith('.mp4') ? 'video' : 'image',
        source: banner.image,
        text: banner.text,
        buttonLink: banner.buttonLink,
      }));
      setAdMedia(formattedBanners);
    }
  }, [isSuccess, homepageItems]);

  // Precargar las imágenes y videos cuando los datos están listos
  useEffect(() => {
    if (adMedia.length > 0) {
      const preloadMedia = async () => {
        const promises = adMedia.map((media) => {
          return new Promise<void>((resolve) => {
            if (media.type === 'image') {
              const img = new Image();
              img.src = media.source;
              img.onload = () => resolve();
            } else {
              const video = document.createElement('video');
              video.src = media.source;
              video.oncanplaythrough = () => resolve();
            }
          });
        });

        await Promise.all(promises);
        setPreloaded(true);  // Cambia el estado para indicar que ya está todo precargado
      };

      preloadMedia();
    }
  }, [adMedia]);

  // Cambiar de imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, adMedia]);

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

  // Manejo de la carga global y el error usando react-query
  if (isLoading || !preloaded) {
    return (
      <div className="spinner-container">
        <img src={spinner} alt="Loading..." />
      </div>
    );
  }

  if (isError) {
    return <Error message="Hubo un problema al cargar los datos del banner." />;
  }

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
