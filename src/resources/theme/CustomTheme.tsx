import { alpha } from "@mui/material/styles";
import createTheme from "@mui/material/styles/createTheme";

const defaultTheme =  createTheme();
export default createTheme({
    palette: {
        fadedPrimary: defaultTheme.palette.augmentColor({
            color: {
                main: alpha(defaultTheme.palette.primary.main, 0.6),

            },
            name: "fadedPrimary"
        })
    },
    typography: {
        fontFamily: [
            "Poppins",
            "Roboto",
            "Helvetica Neue",
            "sans-serif"
        ].join(",")
    }
});