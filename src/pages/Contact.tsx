import Box from '@mui/material/Box/Box';
import Card from '@mui/material/Card/Card';
import Grid from '@mui/material/Grid/Grid';
import Snackbar from '@mui/material/Snackbar/Snackbar';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Footer } from '../components/Footer';
import ContactForm from '../components/forms/ContactForm';
import theme from '../resources/theme/CustomTheme.d';

import { db } from '../config/firebase';
import {
    collection,
    addDoc,
    DocumentData,
    DocumentReference,
} from 'firebase/firestore';
import { ContactFormState, SnackbarOriginState } from '../common/types';


export const Contact = () => {
    const { t } = useTranslation();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [state, setState] = useState<SnackbarOriginState>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const [pikachuAnimation, setAnimation] =
        useState<string>('pika-mailman-idle');
    const [isFormButtonEnabled, setIsFormButtonEnabled] =
        useState<boolean>(true);
    const { vertical, horizontal, open } = state;

    const [values, setValues] = useState<ContactFormState>({
        email: '',
        message: '',
        name: '',
    });

    const updateAnimation = (animation: string) => {
        setAnimation(animation);
    };

    const handleClose = () => {
        updateAnimation('pika-mailman-idle');
        setIsFormButtonEnabled(true);
        setState({ ...state, open: false });
    };

    const saveMessage = (
        formValues: ContactFormState
    ): Promise<DocumentReference<DocumentData>> => {
        if (
            formValues.name !== '' ||
            formValues.email === '' ||
            formValues.message === ''
        ) {
            return Promise.reject({invalid: true});
        }
        return addDoc(collection(db, 'contactform'), {
            email: formValues.email,
            message: formValues.message,
            created: new Date().toUTCString(),
        });
    };

    const handleSave = (evt:  any) => {
        saveMessage(values).then(
            () => {
                updateAnimation('pika-mailman-carry');
                setIsFormButtonEnabled(false);
                setValues({name: '', email: '', message: ''});
                setState({ ...state, open: true });
            },
            (reason: any) => {
                console.error(reason);
            }
        );
    };

    return (
        <ThemeProvider theme={theme}>
            <Box paddingBottom="100px">
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    message={t('contact.sentMessage')}
                    key={vertical + horizontal}
                    autoHideDuration={6000}
                    ContentProps={{sx: { backgroundColor: theme.palette.contactAnimationGreenBackground.main} }}
                />
                <Card
                    variant="outlined"
                    sx={{
                        display: isMobile ? 'block' : 'none',
                        height: '18vh',
                        backgroundColor:
                            theme.palette.contactAnimationGreenBackground.main,
                    }}
                >
                    <Box
                        sx={{
                            height: '100%',
                            width: '100%',
                        }}
                        className={pikachuAnimation}
                    />
                </Card>
                <Card
                    sx={{
                        display: 'block',
                        padding: '8px',
                        margin: '10px',
                    }}
                    raised={true}
                >
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <ContactForm
                                handleSave={handleSave}
                                isFormButtonEnabled={isFormButtonEnabled}
                                values={values}
                                setValues={setValues}
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <Card
                                variant="outlined"
                                sx={{
                                    display: !isMobile ? 'block' : 'none',
                                    height: '100%',
                                    backgroundColor:
                                        theme.palette
                                            .contactAnimationGreenBackground
                                            .main,
                                }}
                            >
                                <Box
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                    }}
                                    className={pikachuAnimation}
                                />
                            </Card>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
            <Footer showSocial={false} />
        </ThemeProvider>
    );
};
