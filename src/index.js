import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { AccountContextProvider } from "./context/AccountContext";

const rootElement = document.querySelector("#root");

createRoot(rootElement).render(
    <React.StrictMode>
        <AccountContextProvider>
            <App />
        </AccountContextProvider>
    </React.StrictMode>
);
