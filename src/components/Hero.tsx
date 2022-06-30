import Grid from '@mui/material/Grid/Grid';
import styled from '@mui/material/styles/styled';

import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button/Button';
import Typography from '@mui/material/Typography/Typography';
import theme from '../resources/theme/CustomTheme.d';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { AnimateWhenVisible } from './animations/AnimateWhenVisible';
import SendIcon from '@mui/icons-material/Send';
import FaceIcon from '@mui/icons-material/Face';
import { Link } from 'react-router-dom';

import BG from '../resources/img/bg-min.jpg';

const Heading = styled(Typography)<{ fontSize?: string }>`
    color: white;
    font-size: ${(p) => (p.fontSize ? p.fontSize : '8vh')};
    text-shadow: 0 2px 0 #000;
    margin-bottom: 0;
`;

export const Hero = () => {
    const { t } = useTranslation();

    return (
        <ThemeProvider theme={theme}>
            <Grid
                container
                sx={{
                    marginTop: '-65px',
                    padding: '24px',
                    objectFit: 'cover',
                    width: '100%',
                    height: '750px',
                    top: '0',
                    left: '0',
                    backgroundImage: `url(${BG})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                }}
            >
                <Grid item xs={12} sm={6}/>
                <Grid item xs={12} sm={6} pt={15}>
                    <AnimateWhenVisible animation="fadeTop">
                        <Heading align="right">{t('landing.title')}</Heading>
                    </AnimateWhenVisible>
                    <AnimateWhenVisible animation="fadeTop">
                        <Heading fontSize="3vh" align="right">
                            {t('landing.subtitle')}
                        </Heading>
                    </AnimateWhenVisible>
                    <AnimateWhenVisible animation="fadeTop">
                        <Heading fontSize="2vh" align="right">
                            {t('landing.summary')}
                        </Heading>
                    </AnimateWhenVisible>
                    <AnimateWhenVisible animation="fadeTop">
                        <Button
                            variant="contained"
                            color="accent"
                            size="large"
                            disableElevation
                            endIcon={<SendIcon />}
                            sx={{ float: 'right', margin: '20px' }}
                        >
                            <Link
                                to="/contact"
                                style={{
                                    textDecoration: 'none',
                                    color: 'primary',
                                }}
                            >
                                {t('landing.cta.contact')}
                            </Link>
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            disableElevation
                            endIcon={<FaceIcon />}
                            sx={{ float: 'right', margin: '20px' }}
                        >
                            {t('landing.cta.work')}
                        </Button>
                    </AnimateWhenVisible>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
