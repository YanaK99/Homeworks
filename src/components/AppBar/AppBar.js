import ClearIcon from "@mui/icons-material/Clear";
import MenuIcon from "@mui/icons-material/Menu";

import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material";
import AppBar from "@mui/material/AppBar";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AccountContext from "../../context/AccountContext";

/**
 *
 * @param root0
 * @param root0.setIsAuthorized
 * @param root0.isAuthorized
 */
export default function ButtonAppBar() {
    const { isAuthorized, logout: logoutUser } = useContext(AccountContext);
    const buttonName = isAuthorized ? "Logout" : "Login";
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const logout = () => {
        logoutUser();
        navigate("/");
    };

    const login = () => {
        navigate("/login");
    };
    const openNav = () => {
        setIsOpen(true);
    };

    const closeNav = () => {
        setIsOpen(false);
    };
    const style = {
            width: "20vw",
            maxWidth: 500,
            backgroundColor: "rgb(58,82,58)",
    };
    return (
        <div>
            <Drawer open={isOpen} onClose={closeNav}>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem sx={{ justifyContent: "flex-end", cursor: "pointer" }}>
                        <ClearIcon onClick={closeNav} />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => navigate("/")}>
                        <ListItemText primary="Logo" />
                    </ListItem>
                    <Divider />
                    <ListItem button onClick={() => navigate("/about-us")}>
                        <ListItemText primary="About Us" />
                    </ListItem>
                    {isAuthorized && (
                        <ListItem button onClick={() => navigate("/dashboard")}>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    )}
                </List>
            </Drawer>
            <AppBar position="static">
                <Toolbar>
                    {!isOpen && (
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
                    <Button color="inherit" onClick={isAuthorized ? logout : login}>
                        {buttonName}
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
