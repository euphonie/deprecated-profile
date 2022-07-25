import AssignmentIcon from '@mui/icons-material/Assignment';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import Box from "@mui/material/Box/Box";
import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import Typography from "@mui/material/Typography/Typography";
import { useTranslation } from 'react-i18next';
import { ResponsabilitiesBoxProps } from '../../common/types';

export const ResponsabilitiesBox = (props: ResponsabilitiesBoxProps) => {
    const { t } = useTranslation();

    return (
        <Box component="div">
            <Typography
                textAlign="left"
                variant="h6"
                component="span"
                sx={{
                    display: 'flex',
                    gap: '0.8rem',
                    alignItems: 'center',
                }}
            >
                <AssignmentIcon color="white" />
                {t('mywork.journey.responsabilities')}
            </Typography>
            <Typography
                variant="caption"
                component="span"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    marginTop: '5px',
                }}
            >
                <List dense={true}>
                    {props.job.responsabilities.map((task: string, i: number) => {
                        return (
                            <ListItem key={i}>
                                <ListItemIcon>
                                    <TaskAltOutlinedIcon color="white" />
                                </ListItemIcon>
                                <ListItemText>{task}</ListItemText>
                            </ListItem>
                        );
                    })}
                </List>
            </Typography>
        </Box>
    );
};
