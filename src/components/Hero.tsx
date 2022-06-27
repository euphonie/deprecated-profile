import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import styled from '@mui/material/styles/styled';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button/Button';
import Typography from '@mui/material/Typography/Typography';
import Link from '@mui/material/Link/Link';
import links from '../fixtures/links';
import theme from '../resources/theme/CustomTheme.d';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Animate from 'react-simple-animate/dist/animate';

const Heading = styled(Typography)<{ fontSize?: string }>`
    color: white;
    font-size: ${(p) => (p.fontSize ? p.fontSize : '8vh')};
    text-shadow: 0 2px 0 #000;
    margin-bottom: 0;
`;


export const Hero = () => {
    const { t, i18n } = useTranslation();
    
    return (
        <ThemeProvider theme={theme}>
            <Grid container>
                <Grid item xs={12} sm={6} />
                <Grid item xs={12} sm={6}>
                    <Animate
                        play={true}
                        duration={1}
                        delay={0.3}
                        start={{ opacity: 0, transform: 'translateY(-25px)' }}
                        end={{ opacity: 1, transform: 'translateY(0)' }}
                        easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
                    >
                        <Heading align="right">{t('title')}</Heading>
                    </Animate>
                    <Animate
                        play={true}
                        duration={1}
                        delay={0.3}
                        start={{ opacity: 0, transform: 'translateY(-25px)' }}
                        end={{ opacity: 1, transform: 'translateY(0)' }}
                        easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
                    >
                        <Heading fontSize="3vh" align="right">
                            {t('subtitle')}
                        </Heading>
                    </Animate>
                    <Animate
                        play={true}
                        duration={1}
                        delay={0.3}
                        start={{ opacity: 0, transform: 'translateY(-25px)' }}
                        end={{ opacity: 1, transform: 'translateY(0)' }}
                        easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
                    >
                        <Link href={links.linkedin} target="_blank" style={{filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"}}>
                            <Button sx={{ float: 'right' }}>
                                <LinkedInIcon color="accent" fontSize="large" />
                            </Button>
                        </Link>
                        <Link href={links.gh} target="_blank" style={{filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))"}}>
                            <Button sx={{ float: 'right' }}>
                                <GitHubIcon color="accent" fontSize="large" />
                            </Button>
                        </Link>
                    </Animate>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
