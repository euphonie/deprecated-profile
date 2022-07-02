import { SnackbarOrigin } from "@mui/material/Snackbar/Snackbar";
import { InternalStandardProps as StandardProps, BoxProps } from '@mui/material';

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
    tech: string;
    img: string;
    confidenceLevel: string;
    yearsOfExperience: number;
}

export interface JobProject {
    name: string;
    description: string;
    startDate: string;
    endDate: string;
    outcome: string;
    techStack: string[];
}
export interface Job {
    key: number;
    position: string;
    company: string;
    team: string;
    icon: string;
    responsabilities: string[];
    startDate: string;
    endDate: string;
    projects: JobProject[]
}

export interface ProjectBoxProps extends StandardProps<BoxProps> {
    job: Job
}

export interface ResponsabilitiesBoxProps extends StandardProps<BoxProps> {
    job: Job
}