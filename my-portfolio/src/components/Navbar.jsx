import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        My Porfolio<span></span>
      </Link>
      <div className="nav-links">
        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Projects
        </NavLink>
        <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
}