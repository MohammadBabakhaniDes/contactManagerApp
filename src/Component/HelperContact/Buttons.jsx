import { Edit, Visibility } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import AlertDelete from "../../alerts/confirmDelete";
import { useSelector } from "react-redux";
import { darkblue, lightblue, lightgreen } from "../../colors/color";
import { useNavigate } from "react-router-dom";

const Buttons = ({contact}) => {
    const isDark = useSelector(state => state.theme.isDark);
    const navigate = useNavigate();

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', mt: 1,
            alignItems: { xs: "center", sm: "flex-start" }
        }}>
            <IconButton sx={{ backgroundColor: isDark? "#198744" :lightgreen, width: { xs: 180, sm: 40 }, height: 40, borderRadius: 2, mt: 1.8, }} aria-label="see" onClick={() => {
                navigate(`/contacts/${contact.id}`);
            }}>
                <Visibility fontSize='inherit' />
            </IconButton>
            <IconButton sx={{ backgroundColor: isDark? darkblue: lightblue, width: { xs: 180, sm: 40 }, height: 40, borderRadius: 2, mt: 1.8, }} aria-label="edit" onClick={() => {
                navigate(`/contacts/edit/${contact.id}`);
            }}>
                <Edit />
            </IconButton>
            <AlertDelete isDark={isDark} contact={contact} />
        </Box>
    );
}

export default Buttons;