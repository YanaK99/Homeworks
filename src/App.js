import { createTheme, ThemeProvider, Container } from "@mui/material";

import { useContext, useMemo } from "react";

import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";

import AccountContext from "./context/AccountContext";

import { AppBar } from "components";
import { AboutUs, Dashboard, ErrorPage, Homepage, Login } from "pages";

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
