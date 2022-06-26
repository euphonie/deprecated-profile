import Container from '@mui/material/Container/Container';
import Grid from '@mui/material/Grid/Grid';
import Animate from 'react-simple-animate/dist/animate';
import { Hero } from '../components/Hero';
import { StarryNightHero } from '../components/StarryNightHero';
import BG from '../resources/img/bg-min.jpg';

const styles = {
    homeContainer: {
        padding: '10px',
    },
};

export const Home = () => {
    return (
        <Container maxWidth="xl">
            <Animate
                play={true}
                duration={1}
                delay={0.3}
                start={{ opacity: 0 }}
                end={{ opacity: 1 }}
                easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
            >
                <img
                    src={BG}
                    alt="background"
                    loading="lazy"
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: 'calc(100% - 50px)',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                    }}
                ></img>
            </Animate>
            <Hero />
        </Container>
    );
};
