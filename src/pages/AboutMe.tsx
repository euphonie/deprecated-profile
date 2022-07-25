import Container from '@mui/material/Container/Container';
import Grid from '@mui/material/Grid/Grid';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { AboutMeScene } from '../components/models/AboutMeScene';
import theme from '../resources/theme/CustomTheme.d';
import AboutMeCard from '../components/AboutMeCard';

import bottomStacked from '../resources/img/layered-peaks-haikei.png';


export const AboutMe = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    backgroundColor: 'secondary.main',
                    paddingBottom: '15rem',
                    backgroundImage: `url(${bottomStacked})`,
                    backgroundSize: '100%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',

                }}
            >
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        md={4}
                        p={4}
                        sx={{ borderRadius: '5px' }}
                    >
                        <AboutMeScene />
                    </Grid>
                    <Grid item xs={12} md={8} p={4}>
                        <AboutMeCard />
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};
