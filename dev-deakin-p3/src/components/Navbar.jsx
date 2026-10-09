
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="logo">
        DEV<span>@</span>Deakin
      </Link>

      <nav>
        <Link to="/#about">About</Link>
        <Link to="/#work">Work</Link>
        <Link to="/#gallery">Gallery</Link>
        <Link to="/#contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  );
}

export default Navbar;