import { SnackbarOrigin } from "@mui/material/Snackbar/Snackbar";

export interface SnackbarOriginState extends SnackbarOrigin {
    open: boolean;
};


export type ContactFormState = {
    email: string;
    message: string;
    name: string;
};

export interface SkillChipData {
    key: number;
    label: string;
    img: string;
    yearsOfExperience: string;
}