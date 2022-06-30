import Box from "@mui/material/Box/Box";
import IconButton from "@mui/material/IconButton/IconButton";
import { Link } from "react-router-dom";
import links from "../fixtures/links";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import HackerrankIcon from './icons/HackerrankIcon';

export const SocialIconBox = () => {
    return(
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'right',
            }}
        >
            <Link to={links.linkedin} target="_blank">
                <IconButton size="large" color="white">
                    <LinkedInIcon />
                </IconButton>
            </Link>
            <Link to={links.gh} target="_blank">
                <IconButton size="large" color="white">
                    <GithubIcon />
                </IconButton>
            </Link>
            <Link to={links.hackerrank} target="_blank">
                <IconButton size="large" color="white">
                    <HackerrankIcon />
                </IconButton>
            </Link>
        </Box>
    );
}