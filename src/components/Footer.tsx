import AppBar from '@mui/material/AppBar/AppBar';
import theme from '../resources/theme/CustomTheme.d';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import MadeInGTIcon from '../resources/img/madeingt.webp';
import { AnimateWhenVisible } from './animations/AnimateWhenVisible';
import Typography from '@mui/material/Typography/Typography';
import MenuItem from '@mui/material/MenuItem/MenuItem';
import { useTranslation } from 'react-i18next';
import { SocialIconBox } from './SocialIconBox';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';

const shouldApplyFixedPosition = (page: string) => {
    return ['/contact', '/about'].indexOf(page) !== -1;
};

export const Footer = ({ showSocial }: { showSocial: boolean }) => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>
            <AppBar
                color="footer"
                position={
                    shouldApplyFixedPosition(window.location.pathname)
                        ? 'fixed'
                        : 'relative'
                }
                sx={{
                    top: 'auto',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    padding: '10px',
                }}
            >
                <AnimateWhenVisible animation="fadeTop">
                    <Toolbar
                        sx={{
                            display: 'flex',
                            width: '100%',
                            padding: '10px',
                            justifyContent: 'space-around',
                            flexDirection: isMobile ? 'column' : 'row',
                            gap: '1rem',
                        }}
                    >
                        <img
                            src={MadeInGTIcon}
                            height="60"
                            width="70.31"
                            alt="madeinguatemala"
                            loading="lazy"
                        />
                        <div style={{ display: showSocial ? 'block' : 'none' }}>
                            <SocialIconBox />
                        </div>
                        <MenuItem>
                            <Typography variant="body2">
                                {t('footer.copyright')}
                            </Typography>
                        </MenuItem>
                    </Toolbar>
                </AnimateWhenVisible>
            </AppBar>
        </ThemeProvider>
    );
};
