import Container from '@mui/material/Container/Container';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import MyWork from './MyWork';

export const Home = () => {
    return (
        <div>
            <Container sx={{maxWidth: '100%'}} maxWidth={false} disableGutters >
                <Hero />
                <MyWork />
            </Container>
            <Container sx={{maxWidth: '100%'}} maxWidth={false} disableGutters>
                <Footer showSocial={true} />
            </Container>
        </div>
    );
};
