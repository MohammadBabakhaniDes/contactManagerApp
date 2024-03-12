import { Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Contact from "./Contact";
import { useSelector } from "react-redux";

const Contacts = () => {
    let { searchItems } = useSelector(state => state.contacts);

    return (
        <>
            <Box mt={5}>
                <Grid container spacing={3}>
                    {
                        searchItems.length > 0 && searchItems.map(contact => (
                            <Grid key={contact.id} xs={12} lg={6}>
                                <Contact contact={contact} />
                            </Grid>
                        ))
                    }
                </Grid>

            </Box>
        </>
    )
}

export default Contacts;