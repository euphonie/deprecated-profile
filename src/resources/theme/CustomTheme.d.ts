import { alpha } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';

const defaultTheme = createTheme();

const { augmentColor } = defaultTheme.palette;
const createColor = (mainColor: string, alphaValue?: number) =>
    augmentColor({
        color: { main: alphaValue ? alpha(mainColor, alphaValue) : mainColor },
    });

declare module '@mui/material/AppBar/AppBar'  {
    interface AppBarPropsColorOverrides {
        fadedPrimary: true;
    }
}

declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsColorOverrides {
        white: true;
    }
}

declare module '@mui/material/IconButton/IconButton' {
    interface IconButtonPropsColorOverrides {
        white: true;
    }
}

declare module '@mui/material/Button/Button' {
    interface ButtonPropsColorOverrides {
        white: true;
    }
}

export default createTheme({
    palette: {
        primary: createColor("#323444"),
        secondary: createColor("#242535"),
        accent: createColor("#F5BB58"),
        fadedPrimary: createColor("#323444", 0.6),
        white: createColor('#fff'),
    },
    typography: {
        fontFamily: ['Poppins Light', 'Roboto', 'Helvetica Neue', 'sans-serif'].join(
            ','
        ),
    },
});
