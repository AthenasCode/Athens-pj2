import arrow from '../assets/arrow-icon.svg';

const SubHeader = () => {
  return (
    <div className="subnavbar">
      <div className="item">
        <h3>Tecnología</h3>
        <img src= {arrow} alt="Icono de Flecha" id="1" />
        <ul className="dropdown" id="dropdown-1">
          <li><a href="#">Computadores</a></li>
          <li><a href="#">Televisores</a></li>
          <li><a href="#">Audio</a></li>
          <li><a href="#">Video</a></li>
          <li><a href="#">Impresión</a></li>
          <li><a href="#">Cámaras</a></li>
        </ul>
      </div>
      <div className="item">
        <h3>Electrodomésticos</h3>
        <img src={arrow} alt="Icono de Flecha" id="2" />
        <ul className="dropdown" id="dropdown-2">
          <li><a href="#">Climatización</a></li>
          <li><a href="#">Refrigeración</a></li>
          <li><a href="#">Lavadoras/Secadoras</a></li>
        </ul>
      </div>
      <div className="item">
        <h3>Celulares</h3>
        <img src={arrow} alt="Icono de Flecha" id="3" />
        <ul className="dropdown" id="dropdown-3">
          <li><a href="PLP.html">Smartwatch</a></li>
          <li><a href="#">Tabletas</a></li>
          <li><a href="#">Celulares</a></li>
        </ul>
      </div>
      <div className="item">
        <h3>Hogar</h3>
        <img src={arrow} alt="Icono de Flecha" id="4" />
        <ul className="dropdown" id="dropdown-4">
          <li><a href="#">Salas</a></li>
          <li><a href="#">Comedor</a></li>
          <li><a href="#">Cocina</a></li>
          <li><a href="#">Baño</a></li>
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
