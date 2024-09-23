import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CounterContext from "./contexts/CounterContext.jsx";
import LoginContext from "./contexts/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <CounterContext>
    <LoginContext>
      <App />
    </LoginContext>
  </CounterContext>
);
