import CircularProgressWithLabel from '@mui/material/CircularProgress';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../resources/theme/CustomTheme.d';

export default () => {
    return (
        <ThemeProvider theme={theme}>
        </ThemeProvider>
    );
};