import "./navbar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="Home.jsx" id="Home">
        HOME
      </Link>
      <Link to="total.jsx" id="Cart">
        CART
      </Link>
    </div>
  );
};
