import { Typography } from "@mui/material";
import { Box } from "@mui/system";

/**
 *
 */
function ErrorPage() {
    return (
        <Box display="flex" alignItems="center" justifyContent="center">
            <Typography fontFamily="Modern No. 20" variant="h2">Page Not Found (404)</Typography>
        </Box>
    );
}
export default ErrorPage;
