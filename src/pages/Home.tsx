import Container from "@mui/material/Container/Container";
import Grid from "@mui/material/Grid/Grid";
import { Hero } from "../components/Hero";
import { StarryNightHero } from "../components/StarryNightHero";

export const Home = () => {
    return (
        <Grid container>
            <Container maxWidth="xl">
                <Hero />
            </Container>
        </Grid>
    );
}