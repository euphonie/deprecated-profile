import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import ExperienceTimeline from "../components/ExperienceTimeline";
import stackedBG from '../resources/img/stacked-waves-haikei.svg';

export default () => {
    return(
        <Container disableGutters maxWidth={false} sx={{backgroundImage: `url(${stackedBG})`, backgroundSize: 'cover'}}>
            <Grid container>
                <Grid item xs={12}>
                    <ExperienceTimeline />
                </Grid>
            </Grid>
        </Container>
    );
}