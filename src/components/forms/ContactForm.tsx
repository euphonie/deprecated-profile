import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { ContactMail } from '@mui/icons-material';
import Button from '@mui/material/Button/Button';
import Typography from '@mui/material/Typography/Typography';
import { useTranslation } from 'react-i18next';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { ContactFormState } from '../../common/types';


export default function ContactForm({
    handleSave,
    isFormButtonEnabled,
    values,
    setValues,
}: {
    handleSave: ((evt: any) => any);
    isFormButtonEnabled: boolean;
    values: ContactFormState;
    setValues: Dispatch<SetStateAction<ContactFormState>>
}) {
    const { t } = useTranslation();

    const handleChange =
        (prop: keyof ContactFormState) => (event: ChangeEvent<HTMLInputElement>) => {
            setValues({ ...values, [prop]: event.target.value });
        };

    return (
        <Box
            component="form"
            autoComplete="off"
            sx={{ display: 'flex', flexWrap: 'wrap' }}
        >
            <FormControl fullWidth sx={{ m: 1 }}>
                <Typography component="div" variant="h5">
                    {t('contact.title')}
                </Typography>
                <Typography component="div" variant="body1">
                    {t('contact.content')}
                </Typography>
            </FormControl>
            <FormControl required fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="contact-email">
                    {t('contact.form.email')}
                </InputLabel>
                <OutlinedInput
                    id="contact-email"
                    inputProps={{ tabIndex: 1 }}
                    value={values.email}
                    type="email"
                    required
                    onChange={handleChange('email')}
                    startAdornment={
                        <ContactMail sx={{ paddingRight: '5px' }} />
                    }
                    label={t('contact.form.email')}
                />
            </FormControl>
            <OutlinedInput
                id="contact-name"
                inputProps={{ tabIndex: -1 }}
                value={values.name}
                onChange={handleChange('name')}
                sx={{
                    opacity: 1,
                    top: 0,
                    zIndex: -1,
                    position: 'absolute',
                    width: 0,
                    height: 0,
                }}
                label={t('contact.form.name')}
            />
            <FormControl required fullWidth sx={{ m: 1 }} variant="filled">
                <InputLabel htmlFor="contact-message">
                    {t('contact.form.message')}
                </InputLabel>
                <FilledInput
                    id="contact-message"
                    inputProps={{ tabIndex: 2 }}
                    type="text"
                    multiline
                    fullWidth
                    rows={5}
                    required
                    value={values.message}
                    placeholder={t('contact.form.messagePlaceholder')}
                    onChange={handleChange('message')}
                />
            </FormControl>
            <FormControl sx={{ m: 1, flex: '1' }}>
                <Button
                    variant="contained"
                    disabled={!isFormButtonEnabled}
                    color="secondary"
                    onClick={handleSave}
                >
                    {t('contact.form.send')}
                </Button>
            </FormControl>
        </Box>
    );
}
