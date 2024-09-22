import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav-bar">
          <div>
            <img src="img/logo.png" alt="Logo Athens" width="200px" />
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
              <a
                href="cart.html"
                className="hover-button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                Carrito
              </a>
            </div>
          </div>
          <div className="hamburger-menu">
            <input type="checkbox" id="check" />
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
