import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AccountContext from "../../context/AccountContext";

/**
 *
 * @param root0
 * @param root0.setIsAuthorized
 */
function Input() {
    const { login: loginUser } = useContext(AccountContext);
    const navigate = useNavigate();

    const login = () => {
        loginUser();
        navigate("/");
    };

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label="Name" variant="standard" id="name" name="name" />
            <TextField label="Password" variant="standard" type="password" id="password" name="password" />
            <Button
                variant="contained"
                onClick={login}
                sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    "&:hover": {
                        backgroundColor: "#4caf50",
                        color: "#fff",
                    },
            }}
            >
                Login
            </Button>
        </Box>
    );
}

export default Input;
