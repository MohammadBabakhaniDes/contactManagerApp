import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { darkTheme, lightTheme } from '../Theme/theme';
import Navbar from '../Component/Navbar';
import { Box } from '@mui/material';
import { Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { grey } from '@mui/material/colors';


const MainLayout = ({ children }) => {
    const cacheRtl = createCache({
        key: 'muirtl',
        stylisPlugins: [prefixer, rtlPlugin],
    });

    const mode = useSelector(state => state.theme.value);
    const theme = mode === "dark" ? darkTheme : lightTheme;
    const isDark = mode === "dark" ? true : false;
    const minHeight = useSelector(state => state.ui.value);

    return (
        <CacheProvider value={cacheRtl}>
            <ThemeProvider theme={theme}>
                <Navbar />
                <Box sx={{minHeight: minHeight, backgroundColor: isDark ? grey[900]: ""}}>
                    <Box sx={{                        
                        width: {
                            xs: "90vw",
                            sm: "70vw",
                            lg: "1260px"
                        }, mx: "auto"
                    }}>
                        {children}
                    </Box>
                </Box>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout;
