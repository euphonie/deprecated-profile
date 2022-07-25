import Box from "@mui/material/Box/Box";
import IconButton from "@mui/material/IconButton/IconButton";
import { Link } from "react-router-dom";
import SocialLinks from "../config/SocialLinks";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import HackerrankIcon from './icons/HackerrankIcon';
import BehanceIcon from './icons/BehanceIcon';
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import theme from '../resources/theme/CustomTheme.d';

interface SocialIconBoxProps {
    showComplete: boolean;
}

export const SocialIconBox = (props: SocialIconBoxProps) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return(
        <Box
            component="div"
            sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'right',
            }}
        >
            <Link to={SocialLinks.linkedin} target="_blank">
                <IconButton size="large" color="white">
                    <LinkedInIcon />
                </IconButton>
            </Link>
            <Link to={SocialLinks.gh} target="_blank">
                <IconButton size="large" color="white">
                    <GithubIcon />
                </IconButton>
            </Link>
            { 
                props.showComplete &&
                <>
                    <Link to={SocialLinks.behance} target="_blank" style={{display: isMobile ? 'none' : 'inherit'}}>
                        <IconButton size="large" color="white">
                            <BehanceIcon />
                        </IconButton>
                    </Link>
                    <Link to={SocialLinks.hackerrank} target="_blank" style={{display: isMobile ? 'none' : 'inherit'}}>
                        <IconButton size="large" color="white">
                            <HackerrankIcon />
                        </IconButton>
                    </Link>
                </>
            }
        </Box>
    );
}