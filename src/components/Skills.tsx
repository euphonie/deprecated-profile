import Typography from '@mui/material/Typography/Typography';
import Box from '@mui/material/Box/Box';
import Container from '@mui/material/Container/Container';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Grid from '@mui/material/Grid/Grid';
import Paper from '@mui/material/Paper/Paper';
import styled from '@mui/material/styles/styled';
import theme from '../resources/theme/CustomTheme.d';
import { SkillChipData } from '../common/types';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar/Avatar';
import Button from '@mui/material/Button/Button';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Chip, useMediaQuery } from '@mui/material';
import hackerrankIcon from '../resources/img/hackerrank.svg';
import mywork from '../config/mywork.json';

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [chipData, setChipData] = useState<readonly SkillChipData[]>(mywork.skills);

    const handleDelete = (chipToDelete: SkillChipData) => () => {
        setChipData((chips) =>
            chips.filter((chip) => chip.key !== chipToDelete.key)
        );
    };

    return (
        isMobile ? null : <ThemeProvider theme={theme}>
            <Container disableGutters maxWidth="xl" sx={{display: isMobile ? 'none' : 'block'}}>
                <Box m={2}>
                    <Typography sx={{ textAlign: 'center' }} variant="h5">
                        Skills summary
                    </Typography>
                </Box>
                <Grid container maxWidth="xl">
                    <Grid item xs={12}>
                        <Paper
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    flexWrap: 'wrap',
                                    listStyle: 'none',
                                    p: 0.5,
                                    m: 0,
                                    backgroundColor: 'transparent'
                                }}
                                elevation={0}
                                component="ul"
                            >
                                {chipData.map((data, i) => {
                                    return (
                                        <ListItem key={data.key}>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                sx={{display: 'flex', gap: '1rem'}}
                                            >
                                                <Typography variant="caption">
                                                    {data.tech}
                                                </Typography>
                                                <Chip color="warning" label={data.yearsOfExperience}></Chip>
                                            </Button>
                                        </ListItem>
                                    );
                                })}
                            </Paper>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
};
