import { StyledEngineProvider } from "@mui/material";
import React, { useMemo, useState } from "react";

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import { AppBar } from "./components/AppBar";
import { AboutUs } from "./pages/AboutUs";
import { Dashboard } from "./pages/Dashboard";
import { ErrorPage } from "./pages/ErrorPage";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";
import { ContainerM } from "./styled";

/**
 *
 */
function App() {
    const [isAuthorized, setIsAuthorized] = useState(false);
    const DashboardElement = useMemo(() => {
        if (isAuthorized) {
            return <Dashboard />;
        }

        return <Navigate to="*" />;
    }, [isAuthorized]);

  return (
      <Router>
          <StyledEngineProvider injectFirst>
              <>
                  <AppBar setIsAuthorized={setIsAuthorized} isAuthorized={isAuthorized} />
                  <ContainerM>
                      <Routes>
                          <Route path="/" element={<Homepage />} />
                          <Route path="/about-us" element={<AboutUs />} />
                          <Route path="/login" element={<Login setIsAuthorized={setIsAuthorized} />} />
                          <Route path="/dashboard" element={DashboardElement} />;
                          <Route path="*" element={<ErrorPage />} />
                      </Routes>
                  </ContainerM>
              </>
          </StyledEngineProvider>
      </Router>
  );
}

export default App;
