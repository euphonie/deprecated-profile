import Timeline from '@mui/lab/Timeline/Timeline';
import TimelineItem from '@mui/lab/TimelineItem/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot/TimelineDot';
import EngineeringIcon from '@mui/icons-material/Engineering';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BusinessIcon from '@mui/icons-material/Business';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import Typography from '@mui/material/Typography';
import mywork from '../config/mywork.json';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import Box from '@mui/material/Box/Box';
import theme from '../resources/theme/CustomTheme.d';
import Paper from '@mui/material/Paper/Paper';
import { AnimateWhenVisible } from './animations/AnimateWhenVisible';
import { ProjectsBox } from './experience/ProjectsBox';
import { Job } from '../common/types';
import { ResponsabilitiesBox } from './experience/ResponsabilitiesBox';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';

export default function ExperienceTimeline() {
    const { t } = useTranslation();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Timeline position={isMobile ? 'right' : 'alternate'}>
            <Typography sx={{ textAlign: 'center' }} variant="h5">
                {t('mywork.journey.title')}
            </Typography>
            <Box m={2}>
                {mywork.work.map((job: Job, i: number) => {
                    const sDate = moment(job.startDate);
                    const eDate = moment(job.endDate);
                    const monthDuration = eDate.diff(sDate, 'months') % 12;
                    const yearDuration = eDate.diff(sDate, 'years');

                    return (
                        <TimelineItem 
                          key={i}
                          sx={{ 
                            flexDirection: isMobile ? 'column' : 'inherit',
                            alignItems: isMobile ? 'center' : 'inherit' 
                          }}
                        >
                            <TimelineOppositeContent
                                sx={{
                                    m: 'auto 0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    fontWeight: '600'
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
                                    {job.icon === 'leadership' ? (
                                        <PersonOutlineIcon />
                                    ) : (
                                        <LaptopMacIcon />
                                    )}
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent
                                sx={{
                                    py: '12px',
                                    px: 2
                                }}
                            >
                                <AnimateWhenVisible animation="fadeTop">
                                    <Paper
                                        sx={{
                                            padding: '30px',
                                            backgroundColor: '#596F62',
                                            color: theme.palette.white.main,
                                            borderColor: 'secondary',
                                            borderStyle: 'solid',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '1rem'
                                        }}
                                    >
                                        <Typography
                                            textAlign="left"
                                            variant="h5"
                                            component="span"
                                            sx={{
                                                display: 'flex',
                                                gap: '0.8rem',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <EngineeringIcon color="white" />
                                            {job.position}
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
                                            <BusinessIcon color="white" />
                                            {job.company}
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
                                            <WorkspacesIcon color="white" />
                                            {`${t('mywork.journey.team')}: ${
                                                job.team
                                            }`}
                                        </Typography>
                                        <ResponsabilitiesBox job={job} />
                                        <ProjectsBox job={job} />
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
