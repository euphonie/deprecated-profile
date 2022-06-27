
import AppBar from '@mui/material/AppBar/AppBar';
import Container from '@mui/material/Container/Container';
import theme from '../resources/theme/CustomTheme.d';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import MadeInGTIcon from '../resources/img/madeingt.png';
import Animate from 'react-simple-animate/dist/animate';

const bottomAppBar = {
    bottom: 0,
    left: 0,
    top: "revert",
    width: "100%",
    padding: "10px"
};

export const Footer = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar color="secondary" position='fixed' style={bottomAppBar}>
                <Animate
                    play={true}
                    duration={1}
                    delay={0.3}
                    start={{ opacity: 0, transform: "translateY(25px)" }}
                    end={{ opacity: 1, transform: "translateY(0)" }}
                    easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
                >
                    <Container maxWidth="xs">
                        <Toolbar disableGutters sx={{ justifyContent: "center" }}>
                            <img src={MadeInGTIcon} style={{height: "60px"}} alt="madeinguatemala"/>
                        </Toolbar>
                    </Container>
                </Animate>
            </AppBar>
        </ThemeProvider>
    );
}