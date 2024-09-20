import { Link } from "react-router-dom";

export function Header() {
  return (
    <header >
      <h1 >
        ESTO ES EL HEADER
      </h1>
      <div >
        
        <div >
          <Link to="/Athens-pj2/">Home</Link>
        </div>
        <div >
          <Link to="/Athens-pj2/PDP">PDP</Link>
        </div>
        <div >
          <Link to="/Athens-pj2/PLP">PLP</Link>
        </div>
        <div >
          <Link to="/Athens-pj2/Cart">Cart</Link>
        </div>
      </div>
      
      <div>Regístrate</div>
    </header>
  );
}
