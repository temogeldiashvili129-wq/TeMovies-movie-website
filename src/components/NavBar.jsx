import { Link } from "react-router-dom";
import "../css/navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/">TeMovies</Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Movies
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}
export default NavBar;
