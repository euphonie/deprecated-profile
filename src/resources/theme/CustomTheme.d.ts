import { alpha } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';

const defaultTheme = createTheme();

const { augmentColor } = defaultTheme.palette;
const createColor = (mainColor: string, alphaValue?: number) =>
    augmentColor({
        color: { 
            main: alphaValue ? alpha(mainColor, alphaValue) : mainColor, 
            deafult: alphaValue ? alpha(mainColor, alphaValue) : mainColor 
        }
    });

declare module '@mui/material/AppBar/AppBar'  {
    interface AppBarPropsColorOverrides {
        fadedPrimary: true;
    }
}

declare module '@mui/material/SvgIcon' {
    interface SvgIconPropsColorOverrides {
        white: true;
        accent: true;
    }
}

declare module '@mui/material/IconButton/IconButton' {
    interface IconButtonPropsColorOverrides {
        white: true;
        accent: true;
    }
}

declare module '@mui/material/Button/Button' {
    interface ButtonPropsColorOverrides {
        white: true;
        accent: true;
    }
}

declare module '@mui/material/Box/Box' {
    interface BoxPropsColorOverrides {
        white: true;
        accent: true;
        silver: true;
    }
}

/*
{"Silver Metallic":"a7a2a9","Raisin Black":"242535","Jet":"323444","Maximum Yellow Red":"e9b44c","Alice Blue":"ebf2fa"}
*/

export default createTheme({
    palette: {
        primary: createColor("#323444"),
        secondary: createColor("#242535"),
        accent: createColor("#E9B44C"),
        silver: createColor("#a7a2a9"),
        fadedPrimary: createColor("#323444", 0.6),
        white: createColor('#fff'),
        background: {
            default: "#E9B44C",
            paper: "#EBF2FA"
        }
    },
    typography: {
        fontFamily: ['Poppins Light', 'Roboto', 'Helvetica Neue', 'sans-serif'].join(
            ','
        )
    },
});
