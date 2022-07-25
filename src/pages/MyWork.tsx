import Container from '@mui/material/Container/Container';
import Grid from '@mui/material/Grid/Grid';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import ExperienceTimeline from '../components/ExperienceTimeline';
import stackedBG from '../resources/img/stacked-waves-haikei.webp';
import theme from '../resources/theme/CustomTheme.d';

export default function MyWork() {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                backgroundImage: `url(${stackedBG})`,
                backgroundSize: isMobile ? 'auto' : 'contain',
            }}
        >
            <Grid
                container
            >
                <Grid item xs={12}>
                    <ExperienceTimeline />
                </Grid>
            </Grid>
        </Container>
    );
}
