import { SnackbarOrigin } from "@mui/material/Snackbar/Snackbar";
import { InternalStandardProps as StandardProps, BoxProps, DialogProps } from '@mui/material';

export interface SnackbarOriginState extends SnackbarOrigin {
    open: boolean;
}

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

export interface TechStackOption { 
    class: string;
    label: string;
    useCustom?: boolean;
}
export interface JobProject {
    name: string;
    description: string;
    startDate: string;
    multipleReleases: boolean; 
    endDate: string;
    outcomes: string[];
    techStack: TechStackOption[];
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

export interface ProjectsDialogProps extends StandardProps<DialogProps> {
    activeProject?: JobProject;
    handleClose: any;
}

export interface TechStackBoxProps extends StandardProps<BoxProps> {
    technologies: TechStackOption[];
    showComplete: boolean;
}