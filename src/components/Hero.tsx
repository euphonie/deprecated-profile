import Grid from '@mui/material/Grid/Grid';
import styled from '@mui/material/styles/styled';

import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button/Button';
import Typography from '@mui/material/Typography/Typography';
import theme from '../resources/theme/CustomTheme.d';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { AnimateWhenVisible } from './animations/AnimateWhenVisible';
import SendIcon from '@mui/icons-material/Send';
import { Link } from 'react-router-dom';

import BG from '../resources/img/bg-min.webp';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';

import bottomHero from '../resources/img/bottom-hero.webp';
import Box from '@mui/material/Box/Box';

const Heading = styled(Typography)<{ fontSize?: string }>`
    color: white;
    font-size: ${(p) => (p.fontSize ? p.fontSize : '8vh')};
    text-shadow: 0 2px 0 #000;
    margin-bottom: 0;
`;

export const Hero = () => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                sx={{
                    marginTop: '-65px',
                    padding: '24px',
                    objectFit: 'cover',
                    width: '100%',
                    height: '55rem',
                    top: '0',
                    left: '0',
                    backgroundImage: `url(${bottomHero}), url(${BG})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <Grid
                    item
                    xs={12}
                    sm={5}
                    sx={{ display: isMobile ? 'none' : 'block' }}
                />
                <Grid item xs={12} sm={7} pt="6rem">
                    <AnimateWhenVisible animation="fadeTop">
                        <Heading fontSize="4rem" align="right">
                            {t('landing.title')}
                        </Heading>
                    </AnimateWhenVisible>
                    <AnimateWhenVisible animation="fadeTop">
                        <Heading fontSize="1.5rem" align="right">
                            {t('landing.subtitle')}
                        </Heading>
                    </AnimateWhenVisible>
                    <AnimateWhenVisible animation="fadeTop">
                        <Heading fontSize="1.5rem" align="right">
                            {t('landing.summary')}
                        </Heading>
                    </AnimateWhenVisible>

                    <AnimateWhenVisible animation="fadeTop">
                        <Box
                            component="div"
                            sx={{
                                display: isMobile ? 'none' : 'flex',
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <Button
                                component={Link}
                                to="/contact"
                                variant="contained"
                                color="accent"
                                size="large"
                                disableElevation
                                sx={{textDecoration: 'none', margin: '5px'}}
                                endIcon={<SendIcon color="primary" />}
                            >
                                {t('landing.cta.contact')}
                            </Button>
                        </Box>
                    </AnimateWhenVisible>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
