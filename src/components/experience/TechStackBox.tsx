import List from '@mui/material/List/List';
import { TechStackBoxProps, TechStackOption } from '../../common/types';
import Icon from '@mui/material/Icon/Icon';
import ListItemText from '@mui/material/ListItemText/ListItemText';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import theme from '../../resources/theme/CustomTheme.d';
import ListItemIcon from '@mui/material/ListItemIcon/ListItemIcon';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';

export const TechStackBox = (props: TechStackBoxProps) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    let technologies = props.technologies;
    if (!props.showComplete){
        technologies = [
            ...props.technologies.slice(0, 5), 
            {
                "class": 'more',
                "label": 'See others',
                "useCustom": true
            }
        ];
    }

    const renderIcon = (techOption: TechStackOption) => {
        if (techOption.useCustom){
            const imgExtension = 'svg';
            return <img
                style={{
                    width: '100%',
                    height: '100%',
                    color: 'white'
                }}
                src={`/tech/${techOption.class}.${imgExtension}`}
                alt={techOption.label}
                loading="lazy"
            />;
        } else {
            return <i className={`devicon-${techOption.class} colored`}></i>;
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <List
                sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1rem', flexBasis: 'auto' }}
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
                                marginTop: '0',
                                alignItems: 'center',
                                backgroundColor: props.showComplete ? 'white.main' : 'transparent',
                                borderRadius: '4px',
                                padding: '4px',
                                flexGrow: '1'
                            }}
                        >
                            <Icon sx={{fontSize: isMobile ?  '1.5rem' : '2rem', overflow: 'revert'}}>
                                { renderIcon(tech) }
                            </Icon>
                            {
                                props.showComplete ? 
                                    <ListItemText sx={{fontSize: isMobile ? '0.8rem' : 'inherit'}}>{tech.label}</ListItemText>
                                    : null
                            }
                        </ListItemIcon>
                    );
                })}
            </List>
        </ThemeProvider>
    );
};
