import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// all imports for router;
import Password from "./Components/Password";
import Profile from "./Components/Profile";
import Recovery from "./Components/Recovery";
import Register from "./Components/Register";
import Username from "./Components/Username";
import Reset from "./Components/Reset";
import PageNotFound from "./Components/PageNotFound";

// Root Routes

const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/Password",
    element: <Password></Password>,
  },
  {
    path: "/Profile",
    element: <Profile></Profile>,
  },
  {
    path: "/Recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/Reset",
    element: <Reset></Reset>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

const App = () => {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
};

export default App;
