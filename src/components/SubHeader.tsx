import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { FaBars } from 'react-icons/fa';
import arrow from '../assets/arrow-icon.svg';
import { menuItems } from "../utils/data";


const SubHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  const toggleMenu = (): void => {
    setMenuOpen(!menuOpen);
  };

  const renderDesktopMenu = (): JSX.Element => (
    <div className="subnavbar">

      <div className="item">
        <h3>Tecnología</h3>
        <img src={arrow} alt="Icono de Flecha" id="1" />
        <ul className="dropdown" id="dropdown-1">
          <li><Link to="/Athens-pj2/PLP?category=computadores">Computadores</Link></li>
          <li><Link to="/Athens-pj2/PLP?category=televisores">Televisores</Link></li>
          <li><Link to="/Athens-pj2/PLP?category=audio">Audio</Link></li>
          <li><Link to="/Athens-pj2/PLP?category=video">Video</Link></li>
          <li><Link to="/Athens-pj2/PLP?category=impresion">Impresión</Link></li>
          <li><Link to="/Athens-pj2/PLP?category=camaras">Cámaras</Link></li>
        </ul>
      </div>
      <div className="item">
        <h3>Electrodomésticos</h3>
        <img src={arrow} alt="Icono de Flecha" id="2" />
        <ul className="dropdown" id="dropdown-2">
          <li><Link to="/Athens-pj2/PLP?category=climatizacion">Climatización</Link></li>
          <li><Link to="/Athens-pj2/PLP?category=refrigeracion">Refrigeración</Link></li>
          <li><Link to="/Athens-pj2/PLP?category=lavadoras">Lavadoras/Secadoras</Link></li>
        </ul>
      </div>
      <div className="item">
        <h3>Celulares</h3>
        <img src={arrow} alt="Icono de Flecha" id="3" />
        <ul className="dropdown" id="dropdown-3">
          <li><Link to="/Athens-pj2/PLP?category=smartwatch">Smartwatch</Link></li>
          <li><Link to="/Athens-pj2/PLP?category=tabletas">Tabletas</Link></li>
          <li><Link to="/Athens-pj2/PLP?category=celulares">Celulares</Link></li>
        </ul>
      </div>
      <div className="item">
        <h3>Hogar</h3>
        <img src={arrow} alt="Icono de Flecha" id="4" />
        <ul className="dropdown" id="dropdown-4">
          <li><Link to="/Athens-pj2/PLP?category=salas">Salas</Link></li>
          <li><Link to="/Athens-pj2/PLP?category=comedor">Comedor</Link></li>
          <li><Link to="/Athens-pj2/PLP?category=cocina">Cocina</Link></li>
          <li><Link to="/Athens-pj2/PLP?category=baño">Baño</Link></li>
        </ul>

      </div>
    </div>
  );

  return (
    <div className="subheader-wrapper">
      {isMobile ? renderMobileMenu() : renderDesktopMenu()}
    </div>
  );
};

export default SubHeader;