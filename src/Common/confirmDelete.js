import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Box, IconButton, Typography } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { PiWarningCircleLight } from "react-icons/pi";
import { useDispatch } from 'react-redux';
import { deleteContact, deleteContactState } from '../slices/ContactSlice';

const AlertDelete = ({contact}) => {
    const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    console.log(true);
    return (
        <div>
            <IconButton onClick={() => {
                handleClickOpen();
            }} sx={{ backgroundColor: "rgba(255, 169, 169, 1)", width: { xs: 180, sm: 40 }, height: 40, borderRadius: 2, mt: 1.8, }} aria-label="delete">
                <Delete />
            </IconButton>
            <Dialog
                open={open}
                fullWidth
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box textAlign={"center"}>
                    <PiWarningCircleLight fontSize='7vw' color="#dd6b55" style={{ marginTop: 20 }} />
                </Box>
                <DialogTitle id="alert-dialog-title">
                    <Typography textAlign={"center"} variant='h4' mb={1}>حذف مخاطب!</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <Typography variant='h6' textAlign={"center"} mb={1}>مطمئنی که میخای مخاطب {contact.fullname} را حذف کنی؟</Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ margin: "0 auto", mb: 3 }}>
                    <Button
                        onClick={handleClose}
                        sx={{ backgroundColor: "#aaa", color: "#000", p: "8px 35px 8px 35px", mr: 2 }}
                    >انصراف</Button>
                    <Button
                        onClick={() => {
                            dispatch(deleteContactState(contact.id));
                            dispatch(deleteContact(contact.id));
                            handleClose();
                        }}
                        autoFocus
                        sx={{ backgroundColor: "red", color: "#000", p: "8px 35px 8px 35px" }}
                    >
                        تایید
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertDelete;