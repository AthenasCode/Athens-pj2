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
      {menuItems.map((category, index) => (
        <div className="item" key={index}>
          <h3>{category.title}</h3>
          <img
            src={arrow}
            alt="Icono de Flecha"
            role="button"
            aria-label={`Abrir menú ${category.title}`}
          />
          <ul className="dropdown">
            {category.items.map((item, itemIndex) => (
              <li key={itemIndex}><a href="#">{item}</a></li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderMobileMenu = (): JSX.Element => (
    <div className="hamburger-menu">
      <label htmlFor="check" className="checkbtn">
        <FaBars onClick={toggleMenu} />
      </label>
      <input type="checkbox" id="check" checked={menuOpen} onChange={toggleMenu} />
      <div className="mobile-menu">
        {menuItems.map((category, index) => (
          <details key={index}>
            <summary>{category.title}</summary>
            <ul>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}><a href="#">{item}</a></li>
              ))}
            </ul>
          </details>
        ))}
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