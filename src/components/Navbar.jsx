import { NavLink } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav>
      <NavItem to="/">About</NavItem>
      <NavItem to="/skills">Skills</NavItem>
      <NavItem to="/projects">Projects</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </nav>
  );
};

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    activeClassName="active"
  >
    {children}
  </NavLink>
);

export default Navbar;
