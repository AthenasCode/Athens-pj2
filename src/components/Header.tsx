import { Link } from "react-router-dom";

export function Header() {
  return (
    <header >
      <h1 >
        ESTO ES EL HEADER
      </h1>
      <div >
        
        <div >
          <Link to="/">Home</Link>
        </div>
        <div >
          <Link to="/PDP">PDP</Link>
        </div>
        <div >
          <Link to="/PLP">PLP</Link>
        </div>
        <div >
          <Link to="/Cart">Cart</Link>
        </div>
      </div>
      
      <div>Regístrate</div>
    </header>
  );
}
