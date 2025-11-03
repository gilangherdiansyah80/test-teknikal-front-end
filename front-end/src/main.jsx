import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import "./index.css";
import { Provider } from "react-redux";
import { Store } from "./app/Store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={AppRouter} />
    </Provider>
  </StrictMode>
);
