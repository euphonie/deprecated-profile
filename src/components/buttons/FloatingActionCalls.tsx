import Box from '@mui/material/Box/Box';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack/Stack';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../../resources/theme/CustomTheme.d';

import SendIcon from '@mui/icons-material/Send';
import { useTranslation } from 'react-i18next';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import Fab from '@mui/material/Fab/Fab';

const FloatingActionCalls = () => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));



    return (
        <ThemeProvider theme={theme}>
            <Box
                component="div"
                m={3}
                sx={{
                    display: isMobile ? 'flex' : 'none',
                    position: 'fixed',
                    bottom: 0,
                    right: 0
                }}
            >
                <Stack spacing={2}>
                    <Fab
                        component={Link}
                        to="/contact"
                        variant="extended"
                        color="accent"
                        sx={{display: 'flex', justifyContent: 'space-evenly'}}
                    >
                        {t('landing.cta.contact')}
                        <SendIcon />
                    </Fab>
                </Stack>
            </Box>
        </ThemeProvider>
    );
};

export default FloatingActionCalls;
