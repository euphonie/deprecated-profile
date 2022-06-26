import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import { Hero } from "../components/Hero";
import { StarryNightHero } from "../components/StarryNightHero";

const styles = {
    homeContainer : {
        padding: "10px"
    }
}

export const Home = () => {
    return (
        <Container maxWidth="xl">
            <Grid container style={styles.homeContainer}>
                <Hero />
            </Grid>
        </Container>
    );
}