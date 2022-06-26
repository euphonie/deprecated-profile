
import AppBar from '@mui/material/AppBar/AppBar';
import Container from '@mui/material/Container/Container';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import MadeInGTIcon from '../resources/img/madeingt.png';

const bottomAppBar = {
    bottom: 0,
    top: "revert",
    width: "100%"
};

export const Footer = () => {
    return (
        <AppBar color="transparent" position='fixed' style={bottomAppBar}>
            <Container maxWidth="xs">
                <Toolbar disableGutters>
                    <img  src={MadeInGTIcon} style={{height: "60px"}} alt="madeinguatemala"/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}