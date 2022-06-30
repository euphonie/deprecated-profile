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

const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
}));

export default () => {
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [chipData, setChipData] = useState<readonly SkillChipData[]>([
        { key: 0, label: 'Angular', img: hackerrankIcon, yearsOfExperience: '5+' },
        { key: 1, label: 'jQuersdfg asdfassdfgy', img: hackerrankIcon, yearsOfExperience: '5+' },
        { key: 2, label: 'Polymer', img: hackerrankIcon, yearsOfExperience: '5+' },
        { key: 3, label: 'Redffact', img: hackerrankIcon, yearsOfExperience: '5+' },
        { key: 4, label: 'Vue.js', img: hackerrankIcon, yearsOfExperience: '5+' },
    ]);

    const handleDelete = (chipToDelete: SkillChipData) => () => {
        setChipData((chips) =>
            chips.filter((chip) => chip.key !== chipToDelete.key)
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Container disableGutters maxWidth="xl">
                <Box m={2}>
                    <Typography sx={{ textAlign: 'center' }} variant="h5">
                        Skills summary
                    </Typography>
                </Box>
                <Grid container maxWidth="xl">
                    <Grid item xs={12} sx={{display: isMobile ? 'block' : 'none'}}> 
                    </Grid>
                    <Grid item xs={12} sx={{display: isMobile ? 'none' : 'block'}}>
                        <Paper
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexWrap: 'wrap',
                                listStyle: 'none',
                                p: 0.5,
                                m: 0,
                                backgroundColor: 'success'
                            }}
                            component="ul"
                        >
                        </Paper>
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
                                {chipData.map((data) => {
                                    return (
                                        <ListItem key={data.key}>
                                            <Button
                                                variant="contained"
                                                sx={{display: 'flex', gap: '1rem'}} 
                                                endIcon={<RemoveCircleIcon />}
                                            >
                                                <Avatar src={data.img} />
                                                <Typography>
                                                    {data.label}
                                                </Typography>
                                                <Chip color="success" label={data.yearsOfExperience}></Chip>
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
