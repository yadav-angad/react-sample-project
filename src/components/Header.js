import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="title">React Training Project</div>
        <nav>
          <button>
            <NavLink to="/" className="menu">Home</NavLink>
          </button>
          <button>
            <NavLink to="/user" className="menu">User</NavLink>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
