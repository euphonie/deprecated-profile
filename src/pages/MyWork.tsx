import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import ExperienceTimeline from "../components/ExperienceTimeline";

export default () => {
    return(
        <Container disableGutters>
            <Grid container maxWidth="xl">
                <Grid item xs={12}>
                    <ExperienceTimeline />
                </Grid>
            </Grid>
        </Container>
    );
}