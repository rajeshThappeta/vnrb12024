import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Technologies from "./components/Technologies";
import "./App.css";

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
          path: "technologies",
          element: <Technologies />,
        },
      ],
    },
  ]);

  return <RouterProvider router={browserRouterObject} />;
}

export default App;
