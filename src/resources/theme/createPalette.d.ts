import "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
    interface Palette {
        fadedPrimary: PaletteColor;
        white: PaletteColor;
    }
    interface PaletteOptions {
        fadedPrimary: PaletteColorOptions;
        white: PaletteColorOptions;
    }
}