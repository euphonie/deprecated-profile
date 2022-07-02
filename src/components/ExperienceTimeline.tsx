import * as React from 'react';
import Timeline from '@mui/lab/Timeline/Timeline';
import TimelineItem from '@mui/lab/TimelineItem/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot/TimelineDot';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BusinessIcon from '@mui/icons-material/Business';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Typography from '@mui/material/Typography';
import mywork from '../config/mywork.json';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Box from '@mui/material/Box/Box';
import theme from '../resources/theme/CustomTheme.d';
import Paper from '@mui/material/Paper/Paper';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import Button from '@mui/material/Button/Button';
import { AnimateWhenVisible } from './animations/AnimateWhenVisible';

export default function ExperienceTimeline() {
    const { t } = useTranslation();

    return (
        <Timeline position="alternate">
            <Typography sx={{ textAlign: 'center' }} variant="h5">
                {t('mywork.journey.title')}
            </Typography>
            <Box m={2}>
                {mywork.work.map((position, i: number) => {
                    const sDate = moment(position.startDate);
                    const eDate = moment(position.endDate);
                    const monthDuration = eDate.diff(sDate, 'months') % 12;
                    const yearDuration = eDate.diff(sDate, 'years');

                    return (
                        <TimelineItem key={i}>
                            
                            <TimelineOppositeContent
                                sx={{
                                    m: 'auto 0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }}
                                variant="h6"
                                color="text.secondary"
                            >
                                  <span>{`${sDate.format(
                                      'MM/YYYY'
                                  )} - ${eDate.format('MM/YYYY')}`}</span>
                                  <span>{`(~${yearDuration} years ${monthDuration} Months)`}</span>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot
                                    color="primary"
                                    sx={{ borderRadius: '2px' }}
                                >
                                    {position.icon == 'leadership' ? (
                                        <PersonOutlineIcon />
                                    ) : (
                                        <LaptopMacIcon />
                                    )}
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent
                                sx={{
                                    py: '12px',
                                    px: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1rem',
                                }}
                            >
                                <AnimateWhenVisible animation="fadeTop">
                                    <Paper
                                        sx={{
                                            padding: '30px',
                                            backgroundColor:
                                                theme.palette.accentGreenSheen
                                                    .main,
                                            color: theme.palette.white.main,
                                            borderColor: 'secondary',
                                            borderStyle: 'solid',
                                        }}
                                    >
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
                                            <EngineeringIcon color="secondary" />
                                            {position.position}
                                        </Typography>
                                        <Typography
                                            textAlign="left"
                                            variant="body2"
                                            component="span"
                                            sx={{
                                                display: 'flex',
                                                gap: '0.8rem',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <BusinessIcon color="secondary" />
                                            {position.company}
                                        </Typography>
                                        <Typography
                                            textAlign="left"
                                            variant="body2"
                                            component="span"
                                            sx={{
                                                display: 'flex',
                                                gap: '0.8rem',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <WorkspacesIcon color="secondary" />
                                            {`${t('mywork.journey.team')}: ${
                                                position.team
                                            }`}
                                        </Typography>
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
                                            <AssignmentIcon color="secondary" />
                                            {t(
                                                'mywork.journey.responsabilities'
                                            )}
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
                                            {position.responsabilities.map(
                                                (task: string, i: number) => {
                                                    return (
                                                        <span key={i}>
                                                            {task}
                                                        </span>
                                                    );
                                                }
                                            )}
                                        </Typography>
                                        <Button
                                            size="large"
                                            variant="outlined"
                                            color="secondary"
                                            sx={{ marginTop: '20px' }}
                                        >
                                            See projects
                                        </Button>
                                    </Paper>
                                </AnimateWhenVisible>
                            </TimelineContent>
                        </TimelineItem>
                    );
                })}
            </Box>
        </Timeline>
    );
}
