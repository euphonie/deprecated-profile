import * as React from 'react';
import Timeline from '@mui/lab/Timeline/Timeline';
import TimelineItem from '@mui/lab/TimelineItem/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import BusinessIcon from'@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Typography from '@mui/material/Typography';
import mywork from '../config/mywork.json';
import { useTranslation } from 'react-i18next';
import { parentPort } from 'worker_threads';
import ListItemButton from '@mui/material/ListItemButton/ListItemButton';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import ListItem from '@mui/material/ListItem/ListItem';

export default function ExperienceTimeline() {
    const { t } = useTranslation();

    return (
        <Timeline position="alternate">
            <Typography sx={{ textAlign: 'center' }} variant="h5">
                {t('mywork.journey.title')}
            </Typography>
            {
              mywork.work.map((position, i) => {
                return (
                  <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0' }}
                        variant="body2"
                        color="text.secondary"
                    >
                        { `${position.startDate} - ${position.endDate}` }
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color="primary">
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: '12px', px: 2, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Typography textAlign="left" variant="h6" component="span" sx={{display: 'flex', gap:'0.8rem', alignItems: 'center'}}>
                            <EngineeringIcon />
                            {position.position}
                        </Typography>
                        <Typography textAlign="left" variant="body2" component="span" sx={{display: 'flex', gap:'0.8rem', alignItems: 'center'}}>
                          <BusinessIcon />
                          {position.company}
                        </Typography>
                        <Typography textAlign="left" variant="body2" component="span"  sx={{display: 'flex', gap:'0.8rem', alignItems: 'center'}}>
                          <WorkspacesIcon />
                            {`${t('mywork.journey.team')}: ${position.team}`}
                        </Typography>
                        <Typography  textAlign="left" variant="h6" component="span"  sx={{display: 'flex', gap:'0.8rem', alignItems: 'center'}}>
                          <AssignmentIcon />
                          {t('mywork.journey.responsabilities')}
                        </Typography>
                        <Typography variant="caption" component="span" sx={{display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          {
                            position.responsabilities.map((task: string) => {
                              return (
                                  <span>{task}</span>
                              );
                            })
                          }
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                );
              })
            }
        </Timeline>
    );
}
