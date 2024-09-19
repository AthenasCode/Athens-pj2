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
          <Link to="/about">About</Link>
        </div>
        <div >
          <Link to="/course">Course</Link>
        </div>
      </div>
      
      <div>Regístrate</div>
    </header>
  );
}
