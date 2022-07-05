import List from '@mui/material/List/List';
import { TechStackBoxProps, TechStackOption } from '../../common/types';
import Icon from '@mui/material/Icon/Icon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../../resources/theme/CustomTheme.d';
import { ListItemIcon } from '@mui/material';

export const TechStackBox = (props: TechStackBoxProps) => {
    let technologies = props.technologies;
    if (!props.showComplete){
        technologies = [
            ...props.technologies.slice(0, 5), 
            {
                "img": 'more.svg',
                "label": 'See others'
            }
        ];
    }

    return (
        <ThemeProvider theme={theme}>
            <List
                sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem' }}
            >
                {technologies.map((tech: TechStackOption, i: number) => {
                    return (
                        <ListItemIcon
                            key={i}
                            color="white"
                            aria-details={tech.label}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '8px',
                                marginTop: '0',
                                alignItems: 'center',
                                backgroundColor: props.showComplete ? 'fadedAccent.main' : 'transparent',
                                borderRadius: '27px'
                            }}
                        >
                            <Icon sx={{fontSize: '2.5rem', overflow: 'revert'}}>
                                <img
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        color: 'white'
                                    }}
                                    src={`/tech/${tech.img}`}
                                    alt={tech.label}
                                />
                            </Icon>
                            {
                                props.showComplete ? 
                                    <ListItemText>{tech.label}</ListItemText>
                                    : null
                            }
                        </ListItemIcon>
                    );
                })}
            </List>
        </ThemeProvider>
    );
};
