import * as React from 'react';
import Box from '@mui/material/Box/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container/Container';
import IconButton from '@mui/material/IconButton/IconButton';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Menu from '@mui/material/Menu/Menu';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Typography from '@mui/material/Typography/Typography';
import Button from '@mui/material/Button/Button';
import theme from '../resources/theme/CustomTheme.d';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import AppBar from '@mui/material/AppBar/AppBar';
import { Link, useNavigate } from 'react-router-dom';
import { SocialIconBox } from './SocialIconBox';

const pages = [
    {
        'title': 'Experience',
        'anchor': '/'
    },
    {
        'title': 'Works/Experiments',
        'anchor': '/'
    },
    {
        'title': 'About',
        'anchor': '/'
    },
    {
        'title': 'Contact',
        'anchor': '/contact'
    }
];

export const NavBar = () => {
    let navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const goTo = (anchor: string) => {    
        navigate(anchor, { replace: true });
    }

    return (
        <ThemeProvider theme={theme}>
            <AppBar color="fadedPrimary" position="sticky">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="white"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                            {
                                pages.map((page) => (
                                    <Link key={page.title} to={page.anchor} replace={true} style={{ textDecoration: 'none' }} >
                                        <MenuItem  onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center" >{page.title}</Typography>
                                        </MenuItem>
                                    </Link>
                                ))
                            }
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { md: 'flex', xs: 'none' } }}>
                            {
                                pages.map((page) => (
                                    <Link key={page.title} to={page.anchor} replace={true} style={{ textDecoration: 'none' }}>
                                        <Button
                                            
                                            color="white"
                                            sx={{ my: 2, display: 'block' }}
                                        >
                                            {page.title}
                                        </Button>
                                    </Link>
                                ))
                            }
                        </Box>
                        <SocialIconBox />
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};
