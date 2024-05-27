import React from "react";
import { Link } from "react-router-dom";
import AppRouter from "../route/AppRouter";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/counter">Counter</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">Login</Link>
      </nav>

      <div>
        <AppRouter />
      </div>
    </div>
  );
};

export default Layout;
