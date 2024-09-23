import React from 'react';

interface AdImageProps {
  image: string;
  text: string;
  buttonLink: string;
}

const AdImage: React.FC<AdImageProps> = ({ image, text, buttonLink }) => {
  return (
    <div className="bannerSale" style={{ backgroundImage: `url('${image}')` }}>
      <div className="contentSale" >
        <h2 className="textSlide">{text}</h2>
        <button className="secondary">
          <a href={buttonLink} className="abanner">Ver más</a>
        </button>
      </div>
    </div>
  );
};

export default AdImage;
