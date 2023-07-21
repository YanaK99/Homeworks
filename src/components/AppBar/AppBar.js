import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material";
import AppBar from "@mui/material/AppBar";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { Sidenav } from "./styled";

/**
 *
 * @param root0
 * @param root0.setIsAuthorized
 * @param root0.isAuthorized
 */
export default function ButtonAppBar({ setIsAuthorized, isAuthorized }) {
    const buttonName = isAuthorized ? "Logout" : "Login";
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const loginOrLogout = () => {
        if (isAuthorized) {
            localStorage.removeItem("user");
            setIsAuthorized(false);
            navigate("/");
            return;
        }
        navigate("/login");
    };

    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };

    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#1976d2",
            },
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar position="static">
                <Toolbar>
                    {isOpen ? (
                        <Sidenav>
                            <li>
                                <span onClick={closeNav}>&times;</span>
                            </li>
                            <li>
                                <NavLink to="/">Logo</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about-us">About Us</NavLink>
                            </li>
                            {isAuthorized &&
                            (
                                <li>
                                    <NavLink to="/dashboard">Dashboard</NavLink>
                                </li>
                            )}
                        </Sidenav>
                    ) : (
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={openNav}
                    >
                        <MenuIcon />
                    </IconButton>
)}
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
                    <Button color="inherit" onClick={loginOrLogout}>{buttonName}
                    </Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
}
