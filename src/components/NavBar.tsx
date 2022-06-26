import * as React from 'react';
import Box from "@mui/material/Box/Box";
import MenuIcon from '@mui/icons-material/Menu';
import Container from "@mui/material/Container/Container";
import IconButton from "@mui/material/IconButton/IconButton";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import Menu from "@mui/material/Menu/Menu";
import MenuItem from "@mui/material/MenuItem/MenuItem";
import Typography from "@mui/material/Typography/Typography";
import Button from '@mui/material/Button/Button';
import theme from '../resources/theme/CustomTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import AppBar from '@mui/material/AppBar/AppBar';

declare module "@mui/material/AppBar/AppBar" {
    interface AppBarPropsColorOverrides {
        fadedPrimary: true;
    }
}

export const NavBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <ThemeProvider theme={theme}>
            <AppBar color="fadedPrimary" position='fixed'>
                <Container maxWidth="xs">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                            <Button
                                key='experience'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Experience
                            </Button>
                            <Button
                                key='works'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Works/Experiments
                            </Button>
                            <Button
                                key='about'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                About
                            </Button>
                            <Button
                                key='contact'
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Contact
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}