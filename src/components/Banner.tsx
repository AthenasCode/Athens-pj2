import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import API from "../api/API";
import Error from "../components/Error"; // Importa el componente Error
import spinner from "../../public/images/Loading_2.gif"; // Importa el spinner de carga

interface AdMedia {
  type: 'image' | 'video';
  source: string;
  text: string;
  buttonLink: string;
}

const textColors = ['#234a9e', '#234a9e', '#234a9e', '#234a9e'];

const ImageSlider: React.FC = () => {
  const [adMedia, setAdMedia] = useState<AdMedia[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);  // Estado para manejar la carga global
  const [error, setError] = useState(false);  // Estado para manejar errores
  const [slideLoading, setSlideLoading] = useState(true); // Estado para manejar la carga de cada imagen/slide

  // Llamada a la API para obtener el video y las imágenes
  useEffect(() => {
    const fetchBannerData = async () => {
      try {
        setLoading(true);
        const banners = await API.Banner();
        const formattedBanners = banners.map((banner: any) => ({
          type: banner.image.endsWith('.mp4') ? 'video' : 'image', // Diferenciar entre imagen y video
          source: banner.image,  // El campo correcto de la API
          text: banner.text,
          buttonLink: banner.buttonLink,
        }));
        setAdMedia(formattedBanners);
        setLoading(false);  // Desactiva el estado de carga global
        setSlideLoading(false); // Desactiva el estado de carga del slide inicial
      } catch (error) {
        console.error('Error fetching banner data:', error);
        setError(true);  // Activa el estado de error si hay un problema
        setLoading(false);
      }
    };

    fetchBannerData();
  }, []);

  // Precarga las imágenes cuando cambia la diapositiva
  useEffect(() => {
    if (adMedia[currentIndex]?.type === 'image') {
      setSlideLoading(true);  // Activa el estado de carga de cada imagen
      const img = new Image();
      img.src = adMedia[currentIndex].source;
      img.onload = () => setSlideLoading(false);  // Desactiva el estado de carga cuando la imagen está lista
    } else {
      setSlideLoading(false);  // Para los videos no es necesario mostrar el spinner
    }
  }, [currentIndex, adMedia]);

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

  // Manejo de la carga global y el error
  if (loading) {
    return (
      <div className="spinner-container">
        <img src={spinner} alt="Loading..." />
      </div>
    );
  }

  if (error) {
    return <Error message="Hubo un problema al cargar los datos del banner." />;
  }

  return (
    <div className="slider">
      <div className="slider-media">
        {slideLoading ? (  // Si la diapositiva está cargando, muestra el spinner
          <div className="spinner-container">
            <img src={spinner} alt="Loading slide..." />
          </div>
        ) : adMedia[currentIndex].type === 'image' ? (
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
