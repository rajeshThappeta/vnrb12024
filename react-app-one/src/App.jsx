import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Technologies from "./components/Technologies";
import UserProfile from "./components/UserProfile";
import "./App.css";
import Java from "./components/Java";
import Node from "./components/Node";
import Vue from "./components/Vue";

function App() {
  //routing configuration
  const browserRouterObject = createBrowserRouter([
    {
      path: "",
      element: <RootLayout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "user-profile/:username",
          element: <UserProfile />,
        },
        {
          path: "technologies",
          element: <Technologies />,
          children: [
            {
              path: "java",
              element: <Java />,
            },
            {
              path: "node",
              element: <Node />,
            },
            {
              path: "vue",
              element: <Vue />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={browserRouterObject} />;
}

export default App;
