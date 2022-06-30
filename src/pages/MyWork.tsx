import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Skills from "../components/Skills";

export default () => {
    return(
        <Container disableGutters>
            <Grid container maxWidth="xl">
                <Grid item xs={12} sm={6}>
                    <Skills />
                </Grid>
                <Grid item xs={12} sm={6}>
                   <ExperienceTimeline />
                </Grid>
            </Grid>
        </Container>
    );
}