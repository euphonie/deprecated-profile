
import Card from '@mui/material/Card/Card';
import CardContent from '@mui/material/CardContent/CardContent';
import Typography from '@mui/material/Typography/Typography';

import List from '@mui/material/List/List';
import ListItem from '@mui/material/ListItem/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import ListItemText from '@mui/material/ListItemText/ListItemText';

import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../resources/theme/CustomTheme.d';

import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import aboutme from '../config/aboutme.json';
import { useTranslation } from 'react-i18next';


interface AboutMeInfo {
    whatILike: string;
    whatHaveIDoneTitle: string;
    whatHaveIDone: string[];
    whatIWantToDoTitle: string;
    whatIWantToDo: string[];
}

const AboutMeCard = () => {
    const { t } = useTranslation();
    const aboutMeInfo:AboutMeInfo = aboutme;
    return (
        <ThemeProvider theme={theme}>
            <Card sx={{ backgroundColor: 'accent.main' }}>
                <CardContent
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'space-between',
                        gap: '2rem'
                    }}
                >
                    <Typography variant="h3" textAlign="center">{ t('about.title') }</Typography>
                    <code>{ aboutMeInfo.whatILike }</code>
                    <code>{ aboutMeInfo.whatHaveIDoneTitle }</code>
                    <List>
                    { 
                        aboutMeInfo.whatHaveIDone.map((item: string, i: number) => {
                            return (
                                <ListItem key={i}>
                                    <ListItemIcon>
                                        <CheckBoxIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        <Typography
                                            sx={{ fontSize: '0.8rem' }}
                                        >
                                            <code>{item}</code>
                                        </Typography>
                                    </ListItemText>
                                </ListItem>
                            )
                        }) 
                    }
                    </List>
                    <code>{ aboutMeInfo.whatIWantToDoTitle }</code>
                    { 
                        <List>
                        { 
                            aboutMeInfo.whatIWantToDo.map((item: string, i: number) => {
                                return (
                                    <ListItem key={i}>
                                        <ListItemIcon>
                                            <CheckBoxOutlineBlankIcon />
                                        </ListItemIcon>
                                        <ListItemText>
                                            <Typography
                                                sx={{ fontSize: '0.8rem' }}
                                            >
                                                <code>{item}</code>
                                            </Typography>
                                        </ListItemText>
                                    </ListItem>
                                )
                            }) 
                        }
                        </List>
                    }
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}

export default AboutMeCard;