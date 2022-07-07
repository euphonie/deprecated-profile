import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { ProjectsDialogProps } from '../../common/types';
import theme from '../../resources/theme/CustomTheme.d';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import layeredBG from '../../resources/img/layered-waves-haikei-top.svg';

export const ProjectsDialog = (props: ProjectsDialogProps) => {
    return (
        <ThemeProvider theme={theme}>
            <Dialog
                maxWidth="md"
                onClose={props.handleClose}
                aria-labelledby="customized-dialog-title"
                open={props.open}
                sx={{ 
                    backgorundColor: 'transparent'
                }}
            >
                <DialogTitle
                    variant="h6"
                    sx={{
                        m: 0,
                        p: 2,
                        backgroundColor: 'secondary.main',
                        color: 'white.main',
                    }}
                >
                    {props.activeProject?.name ?? ''}
                    <IconButton
                        aria-label="close"
                        onClick={props.handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent
                    sx={{ 
                        color: 'white.main',
                        backgorundColor: 'transparent',
                        height: '28rem',
                        backgroundImage: `url(${layeredBG})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                    }}
                >
                    {props.children}
                </DialogContent>
            </Dialog>
        </ThemeProvider>
    );
};
