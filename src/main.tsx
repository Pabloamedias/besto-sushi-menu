import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CategoriasProvider } from "./context/CategoriasContext.tsx";
import { DatosLocalProvider } from "./context/DatosLocalContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CategoriasProvider>
      <DatosLocalProvider>
        <BrowserRouter basename={"/"}>
          <App />
        </BrowserRouter>
      </DatosLocalProvider>
    </CategoriasProvider>
  </React.StrictMode>
);
