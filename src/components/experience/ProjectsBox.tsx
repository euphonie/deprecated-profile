import Box from '@mui/material/Box/Box';
import Button from '@mui/material/Button/Button';
import Typography from '@mui/material/Typography/Typography';
import { useTranslation } from 'react-i18next';
import { JobProject, ProjectBoxProps } from '../../common/types';
import SplitscreenOutlinedIcon from '@mui/icons-material/SplitscreenOutlined';
import { useState } from 'react';
import { ProjectsDialog } from '../dialogs/ProjectsDialog';
import moment from 'moment';
import { TechStackBox } from './TechStackBox';
import Replay30Icon from '@mui/icons-material/Replay30';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import theme from '../../resources/theme/CustomTheme.d';
import Grid from '@mui/material/Grid/Grid';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import List from '@mui/material/List/List';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export const ProjectsBox = (props: ProjectBoxProps) => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [activeProject, setActiveProject] = useState<JobProject>();
    const [isProjectModalOpen, setProjectModalOpen] = useState<boolean>(false);

    const handleProjectModalOpen = (project: JobProject) => {
        setActiveProject(project);
        setProjectModalOpen(true);
    };

    const handleProjectModalClose = (_evt: any) => {
        setProjectModalOpen(false);
    };

    return (
        <Box component="div">
            <Typography
                variant="h6"
                textAlign="left"
                component="span"
                sx={{
                    display: 'flex',
                    gap: '0.8rem',
                    alignItems: 'center',
                }}
            >
                <SplitscreenOutlinedIcon />
                {t('projects.title')}
            </Typography>
            <Box component="div" sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {props.job.projects.map((project: JobProject, i: number) => {
                    return (
                        <Button
                            key={i}
                            size="large"
                            variant="outlined"
                            color="white"
                            onClick={(_evt) => handleProjectModalOpen(project)}
                            sx={{
                                padding: '20px',
                                marginTop: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                flexWrap: 'wrap',
                                flex: isMobile ? '100%' : '33%',
                            }}
                        >
                            {project.name}

                            <TechStackBox
                                showComplete={false}
                                technologies={project.techStack ?? []}
                            />
                        </Button>
                    );
                })}
            </Box>
            <ProjectsDialog
                open={isProjectModalOpen}
                activeProject={activeProject}
                handleClose={handleProjectModalClose}
            >
                <Grid container>
                    <Grid item xs={12} sm={12} md={8} p={2}>
                        <Typography variant="overline" textAlign={isMobile ? 'center' : 'inherit'}>
                            <span>{`${moment(activeProject?.startDate).format(
                                'MM/YYYY'
                            )} - ${moment(activeProject?.endDate).format(
                                'MM/YYYY'
                            )}`}</span>
                        </Typography>
                        {
                            activeProject?.multipleReleases ?
                                <Typography
                                    sx={{
                                        fontStyle: 'italic',
                                        alignItems: 'right',
                                        backgroundColor: 'fadedAccent.main',
                                        borderRadius: '5px',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        flexDirection: 'row',
                                        gap: '1rem',
                                    }}
                                >
                                    {t('projects.dialog.multipleReleasesLabel')}
                                    <Replay30Icon />
                                </Typography>
                                : null
                        }
                        <Typography sx={{fontSize: '0.8rem'}}>
                            {activeProject?.description ?? ''}
                        </Typography>
                        <Typography variant="h5" sx={{fontSize: isMobile ? '0.8rem' : 'inherit', marginTop: '10px'}}>
                            {t('projects.dialog.outcomeLabel')}
                        </Typography>
                        <Typography sx={{fontSize: '0.8rem'}}>
                            <List dense disablePadding>
                                {
                                    activeProject?.outcomes.map((outcome: string, i: number) => {
                                        return(
                                            <ListItem key={i}>
                                                <ListItemIcon>
                                                    <AssignmentTurnedInIcon color="white" />
                                                </ListItemIcon>
                                                <ListItemText>{outcome}</ListItemText>
                                            </ListItem>
                                        )
                                    })
                                }
                            </List>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} p={2}>
                        <TechStackBox
                            showComplete={true}
                            technologies={activeProject?.techStack ?? []}
                        />
                    </Grid>
                </Grid>
            </ProjectsDialog>
        </Box>
    );
};
