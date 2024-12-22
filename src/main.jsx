import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CVRender from "./cvrender.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CVRender />
  </StrictMode>
);
