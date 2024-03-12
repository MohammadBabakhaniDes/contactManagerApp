import * as React from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector } from 'react-redux';
import { backgroundcardblue, liver } from '../../colors/color';
import Buttons from '../HelperContact/Buttons';
import ContactData from '../HelperContact/ContactData';
import ContactImage from '../HelperContact/ContactImage';


const Contact = ({ contact }) => {
    const isDark = useSelector(state => state.theme.isDark);

    return (
        <Card sx={{
            boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
            padding: "16px 0 16px 10px",
            borderRadius: 3,
            backgroundColor: isDark ? liver : backgroundcardblue,
            border: "1px solid #ddd"
        }}>
            <Grid container>
                <Grid xs={12} md={4}>
                    <ContactImage contact={contact} />
                </Grid>
                <Grid xs={12} sm={10} md={7} sx={{ display: 'flex', flexDirection: 'column', pr: 1.9 }}>
                    <ContactData contact={contact} />
                </Grid>
                <Grid xs={12} sm={2} md={1}>
                    <Buttons contact={contact} />
                </Grid>
            </Grid>
        </Card>
    );
}

export default Contact;