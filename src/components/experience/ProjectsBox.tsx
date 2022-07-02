import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import Typography from "@mui/material/Typography/Typography";
import { useTranslation } from "react-i18next";
import { JobProject, ProjectBoxProps } from "../../common/types";
import SplitscreenOutlinedIcon from '@mui/icons-material/SplitscreenOutlined';


export const ProjectsBox = (props: ProjectBoxProps) => {
    const { t } = useTranslation();
    
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
                }}>
                <SplitscreenOutlinedIcon />
                {t('projects.title')}
            </Typography>
            <Box sx={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                {
                    props.job.projects.map((project: JobProject, i: number) => {
                        return (
                        <Button
                            size="large"
                            variant="outlined"
                            color="primary"
                            sx={{ padding: '20px', marginTop: '20px', flex: '33%' }}
                        >
                            {project.name}
                        </Button>
                        )
                    })
                }
            </Box>
        </Box>
    );
}