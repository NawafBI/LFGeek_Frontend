import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Sidebar } from "semantic-ui-react";

import LoginForm from "./forms/loginForm";

export default Sidebar => {
  return (
    <Menu>
      <a className="menu-item" href="/GamesList/">
        Home
      </a>

      <a className="menu-item" href="/login/">
        Games
      </a>

      <a className="menu-item" href="/">
        Find a group
      </a>

      <a className="menu-item" href="/">
        Profile
      </a>

      <a className="menu-item" href="/">
        About
      </a>
    </Menu>
  );
};
