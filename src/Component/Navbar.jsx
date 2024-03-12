import { Box, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SearchContact } from "./Contact/SearchContact";
import { ContactsSharp } from '@mui/icons-material';
import { useSelector } from "react-redux";
import ThemeActionButton from "../Theme/SwitchTheme";
import { amber, darkblue } from "../colors/color";



const Navbar = () => {
    const path = useSelector(state => state.contacts.path);
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark" ? true : false;

    return (
        <Box sx={{ boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px", height: { xs: path ? 140 : 80, md: 80 }, backgroundColor: isDark ? darkblue : amber }}>
            <Grid container sx={{
                width: {
                    xs: "80vw",
                    lg: "1250px"
                }, mx: "auto"
            }}>
                <Grid xs={12} md={6}>
                    <Box display={"flex"}>
                        <ContactsSharp sx={{ mt: 2.5, mr: 1.5 }} />
                        <Typography variant="h6" color="text.primary" mt={2}>وب اپلیکیشن مدیریت مخاطبین</Typography>
                    </Box>
                </Grid>
                {
                    path ? (
                        <Grid xs={12} md={6} sx={{ mt: { xs: 3, md: 1 }, display: "flex", flexDirection: 'row' }}>
                            <SearchContact />
                            <ThemeActionButton />
                        </Grid>
                    ) : null
                }
            </Grid>
        </Box>
    )
    // } else {
    //     return(
    //         <>
    //         </>
    //     )
    // }
}

export default Navbar;