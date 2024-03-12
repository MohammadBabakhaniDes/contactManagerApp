import { Box } from "@mui/material";
import backgroundImage from "../../assets/man-taking-note.png";

const BackgroundImage = () => {
    return (
        <div dir="ltr" style={{ position: "absolute", top: 50, right: 0, bottom: 0, left: 0 }}>
            <Box sx={{ backgroundImage: `url(${backgroundImage})`, opacity: { xs: 0.2, md: 0.3, lg: 0.6 }, mr: 14, backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", width: 730, height: 400 }}>
            </Box>
        </div>
    )
}

export default BackgroundImage;