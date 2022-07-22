import Container from "@mui/material/Container/Container"
import Grid from "@mui/material/Grid/Grid";
import { Footer } from "../components/Footer";
import { AboutMeScene } from "../components/models/AboutMeScene";


export const AboutMe = () => {
    return (
        <>
            <Container disableGutters maxWidth={false} sx={{backgroundColor: 'secondary.main', paddingBottom: '15rem'}}>
                <Grid container>
                    <Grid item xs={12} md={4} m={2} p={4} sx={{borderRadius: '5px'}}>
                        <AboutMeScene /> 
                    </Grid>
                    <Grid item xs={12} md={8} m={2} p={4}>

                    </Grid>
                </Grid>
            </Container>
            <Footer showSocial={false} />
        </>
    )
}