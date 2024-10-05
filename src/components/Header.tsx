import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import Logo from '../../public/images/logo.png';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-bar">
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo Athens" width="200px" />
          </Link>
        </div>
          <div>
            <div className="center-menu">
              <FaSearch />
              <input className="flexsearch--input" type="search" placeholder="search" />
            </div>
          </div>
          <div>
            <div className="right-menu">
              <FaUser />
              <a
                href="#"
                className="hover-button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                Mi cuenta
              </a>
              <FaShoppingCart />
              <Link
                to ="/Cart"
                className="hover-button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                Carrito
              </Link>
            </div>
          </div>
          <div className="hamburger">
            <label htmlFor="check" className="checkbtn">
              {/* Icono de menú removido */}
            </label>
            <div className="mobile-menu">
              {/* Menú móvil sigue presente */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
