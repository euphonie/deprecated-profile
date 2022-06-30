import "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
    interface Palette {
        fadedPrimary: PaletteColor;
        white: PaletteColor;
        contactAnimationGreenBackground: PaletteColor;
    }
    interface PaletteOptions {
        fadedPrimary: PaletteColorOptions;
        white: PaletteColorOptions;
        contactAnimationGreenBackground: PaletteColorOptions;
    }
}