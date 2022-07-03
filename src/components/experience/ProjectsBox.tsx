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
import Divider from '@mui/material/Divider/Divider';
import Replay30Icon from '@mui/icons-material/Replay30';

export const ProjectsBox = (props: ProjectBoxProps) => {
    const { t } = useTranslation();

    const [activeProject, setActiveProject] = useState<JobProject>();
    const [isProjectModalOpen, setProjectModalOpen] = useState<boolean>(false);

    const handleProjectModalOpen = (project: JobProject) => {
        setActiveProject(project);
        setProjectModalOpen(true);
    };

    const handleProjectModalClose = (evt: any) => {
        setProjectModalOpen(false);
    };

    return (
        <Box>
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
            <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {props.job.projects.map((project: JobProject, i: number) => {
                    return (
                        <Button
                            key={i}
                            size="large"
                            variant="outlined"
                            color="white"
                            onClick={(evt) => handleProjectModalOpen(project)}
                            sx={{
                                padding: '20px',
                                marginTop: '20px',
                                display: 'flex',
                                flexDirection: 'column',
                                flexWrap: 'wrap',
                                flex: '33%',
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
                <Typography variant="overline">
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
                            'This project consisted on multiple releases'
                            <Replay30Icon />
                        </Typography>
                        : null
                }
                <Divider />
                <Typography variant="h6">
                    {t('projects.dialog.descriptionLabel')}
                </Typography>
                <Typography variant="body1">
                    {activeProject?.description ?? ''}
                </Typography>
                <Divider />
                <Typography variant="h6">
                    {t('projects.dialog.outcomeLabel')}
                </Typography>
                <Typography variant="body1">
                    {activeProject?.outcome ?? ''}
                </Typography>
                <Divider />
                <Typography variant="h6">
                    {t('projects.dialog.techStackLabel')}
                </Typography>
                <TechStackBox
                    showComplete={true}
                    technologies={activeProject?.techStack ?? []}
                />
            </ProjectsDialog>
        </Box>
    );
};
