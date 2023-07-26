import { Box, Typography, Avatar } from "@mui/material";

import LogoImage from "../../images/Logo.png";
/**
 *
 */
function Homepage() {
    const customAvatarStyle = {
        objectFit: "contain",
        width: 60,
        height: 70
    };
    return (
        <Box
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
            zIndex={1}
        >
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="absolute"
                zIndex={10}
                top={-55}
            >
                <Avatar sx={{ backgroundColor: "#75757500" }}>
                    <img style={customAvatarStyle} src={LogoImage} alt="cover" />
                </Avatar>
                <Typography variant="h4" fontFamily="Modern No. 20" color="#f2f2f2" marginLeft={2}>
                    LeafCraft
                </Typography>
            </Box>
        </Box>
    );
}

export default Homepage;
