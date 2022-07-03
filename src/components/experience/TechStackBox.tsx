import IconButton from '@mui/material/IconButton/IconButton';
import List from '@mui/material/List/List';
import Box from '@mui/material/Box/Box';
import { TechStackBoxProps, TechStackOption } from '../../common/types';
import Icon from '@mui/material/Icon/Icon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../../resources/theme/CustomTheme.d';

export const TechStackBox = (props: TechStackBoxProps) => {
    const technologies = props.showComplete
        ? props.technologies
        : props.technologies.slice(0, 10);

    return (
        <ThemeProvider theme={theme}>
            <List
                sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem' }}
            >
                {technologies.map((tech: TechStackOption, i: number) => {
                    return (
                        <IconButton
                            key={i}
                            size="large"
                            color="white"
                            aria-details={tech.label}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px',
                                marginTop: '20px',
                                alignItems: 'center',
                                backgroundColor: 'accent.main',
                                borderRadius: '27px',
                                border: '1px solid #000'
                            }}
                        >
                            <Icon>
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        color: 'white',
                                    }}
                                    src={`/tech/${tech.img}`}
                                    alt={tech.label}
                                />
                            </Icon>
                            <ListItemText>{tech.label}</ListItemText>
                        </IconButton>
                    );
                })}
            </List>
        </ThemeProvider>
    );
};
