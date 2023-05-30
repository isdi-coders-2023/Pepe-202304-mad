import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App/App";
import { AppContextProvider } from "./context/app.context.provider";

ReactDOM.createRoot(document.querySelector(".app") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
);
