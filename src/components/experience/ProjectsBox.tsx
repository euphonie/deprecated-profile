import Box from "@mui/material/Box/Box";
import Button from "@mui/material/Button/Button";
import { JobProject, ProjectBoxProps } from "../../common/types";


export const ProjectsBox = (props: ProjectBoxProps) => {
    return (
        <Box>
            {
                props.job.projects.map((project: JobProject, i: number) => {
                    return (
                    <Button
                        size="large"
                        variant="outlined"
                        color="secondary"
                        sx={{ marginTop: '20px', flex: '50%' }}
                    >
                        {project.name}
                    </Button>
                    )
                })
            }
        </Box>
    );
}