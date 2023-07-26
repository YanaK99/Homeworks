import { Card, CardContent } from "@mui/material";

import { Box } from "@mui/system";

import { Input, Title } from "../../components";

/**
 *
 * @param root0
 * @param root0.setIsAuthorized
 * @param root0.isAuthorized
 */
function Login() {
    return (
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", py: 8 }}>
            <Card sx={{ width: 400, borderRadius: 6 }}>
                <CardContent sx={{ backgroundColor: "rgba(189,229,190,0.53)", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Title />
                    <Input />
                </CardContent>
            </Card>
        </Box>
    );
}

export default Login;
