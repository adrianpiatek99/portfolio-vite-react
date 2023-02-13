import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { GlobalStyle, ThemeProvider } from "styled/theme";

import DefaultPage from "./pages";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <DefaultPage />
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
