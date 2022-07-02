import Container from '@mui/material/Container/Container';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import MyWork from './MyWork';

import * as Scroll from 'react-scroll';

export const Home = () => {
    return (
        <div>
            <Container sx={{maxWidth: '100%'}} maxWidth={false} disableGutters >
                <Scroll.Element name="home">
                    <Hero />
                </Scroll.Element>
                <Scroll.Element name="experience">
                    <MyWork/>
                </Scroll.Element>
            </Container>
            <Container sx={{maxWidth: '100%'}} maxWidth={false} disableGutters>
                <Footer showSocial={true} />
            </Container>
        </div>
    );
};
