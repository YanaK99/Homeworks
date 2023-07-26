import { createTheme, ThemeProvider, Container } from "@mui/material";
import React, { useContext, useMemo } from "react";

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import { AppBar } from "./components/AppBar";
import AccountContext from "./context/AccountContext";
import { AboutUs } from "./pages/AboutUs";
import { Dashboard } from "./pages/Dashboard";
import { ErrorPage } from "./pages/ErrorPage";
import { Homepage } from "./pages/Homepage";
import { Login } from "./pages/Login";

/**
 *
 */
function App() {
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#1976d2",
            },
        },
    });
    const { isAuthorized } = useContext(AccountContext);
    const DashboardElement = useMemo(() => {
        if (isAuthorized) {
            return <Dashboard />;
        }

        return <Navigate to="*" />;
    }, [isAuthorized]);

  return (
      <Router>
          <ThemeProvider theme={darkTheme}>
                  <AppBar />
              <Container sx={{ maxWidth: "80vw", margin: "0 auto" }}>
                      <Routes>
                          <Route path="/" element={<Homepage />} />
                          <Route path="/about-us" element={<AboutUs />} />
                          <Route path="/login" element={<Login />} />
                          <Route path="/dashboard" element={DashboardElement} />;
                          <Route path="*" element={<ErrorPage />} />
                      </Routes>
              </Container>
          </ThemeProvider>
      </Router>
  );
}

export default App;
