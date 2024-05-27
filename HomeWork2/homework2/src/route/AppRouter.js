import React from "react";
import { useRoutes } from "react-router-dom";
import Counter from "../components/Counter";
import Profile from "../components/Profile";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import RequiredAuthen from "../components/RequiredAuthen";

const AppRouter = () => {
  const elements = useRoutes([
    { path: `/counter`, element: <Counter /> },
    // { path: `/counter/:id/:abc/:aa`, element: <Counter /> },
    { path: `/login`, element: <Login /> },
    {
      path: `/profile`,
      element: (
        <RequiredAuthen>
          <Profile />
        </RequiredAuthen>
      ),
    },
    { path: `*`, element: <NotFound /> },
  ]);
  return elements;
};

export default AppRouter;
