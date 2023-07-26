import { Typography } from "@mui/material";
import { Box } from "@mui/system";

/**
 *
 */
function Title() {
    return (
        <Box>
            <Typography variant="h4" sx={{ textAlign: "center", fontWeight: "bold", fontFamily: "Modern No. 20", mb: 2 }}>
                Login
            </Typography>
            <Typography variant="body1">Welcome to your account!</Typography>
        </Box>
    );
}

export default Title;
