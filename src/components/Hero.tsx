import Grid from '@mui/material/Grid/Grid';
import Icon from '@mui/material/Icon/Icon';
import Paper from '@mui/material/Paper/Paper';
import styled from '@mui/material/styles/styled';

import { useTranslation } from 'react-i18next';

const Item = styled(Paper)`
    color: #fff;
    font-weight: bold;
    display: flex;
    align-items: center;
`;

const AnimatedText = styled('p')<{fontSize?: string}>`
    color: white;
    font-size: ${p => (p.fontSize ? p.fontSize : "8vw") };
    text-shadow: 2px 2px 0 #000;
    text-align: right;
    margin-bottom: 0;
`;


export const Hero = () => {
    const { t, i18n } = useTranslation();
    return (
        <Grid container>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={6}>
                <AnimatedText>{t('title')}</AnimatedText>
                <AnimatedText fontSize="3vw">
                    {t('subtitle')}
                    <br/>
                    <br/>
                </AnimatedText>
            </Grid>
        </Grid>
    );
}
