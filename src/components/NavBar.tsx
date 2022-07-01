import * as React from 'react';
import Box from '@mui/material/Box/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container/Container';
import IconButton from '@mui/material/IconButton/IconButton';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import Menu from '@mui/material/Menu/Menu';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import Typography from '@mui/material/Typography/Typography';
import theme from '../resources/theme/CustomTheme.d';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import AppBar from '@mui/material/AppBar/AppBar';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HomeIcon from '@mui/icons-material/Home';
import { SocialIconBox } from './SocialIconBox';

const pages = [
    {
        key: 0,
        title: 'experience',
        anchor: '/',
    },
    {
        key: 1,
        title: 'work',
        anchor: '/',
    },
    {
        key: 2,
        title: 'about',
        anchor: '/',
    },
    {
        key: 3,
        title: 'contact',
        anchor: '/contact',
    },
];

export const NavBar = () => {
    const { t } = useTranslation();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                color={
                    window.location.pathname === '/contact'
                        ? 'primary'
                        : 'fadedPrimary'
                }
                position="sticky"
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'left'
                            }}
                        >
                            <Link to="/">
                                <IconButton size="large" color="white">
                                    <HomeIcon />
                                </IconButton>
                            </Link>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="menu options"
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
                                {pages.map((page) => (
                                    <Link
                                        key={page.title}
                                        to={page.anchor}
                                        replace={true}
                                        style={{ textDecoration: 'none', color: 'primary' }}
                                    >
                                        <MenuItem onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">
                                                {t(`menu.${page.title}`)}
                                            </Typography>
                                        </MenuItem>
                                    </Link>
                                ))}
                            </Menu>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { md: 'flex', xs: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <Link
                                    key={page.title}
                                    to={page.anchor}
                                    replace={true}
                                    style={{ textDecoration: 'none',  color:"white" }}
                                >
                                    <MenuItem>
                                        <Typography>
                                            {t(`menu.${page.title}`)}
                                        </Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Box>
                        <SocialIconBox />
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
};
