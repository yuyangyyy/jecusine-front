import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav">
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/Plats">
        Plats
      </NavLink>
      <NavLink exact to="/Actus">
        Actus
      </NavLink>
      <NavLink exact to="/Contact">
        Contact-us
      </NavLink>
    </div>
  );
};

export default Navigation;
