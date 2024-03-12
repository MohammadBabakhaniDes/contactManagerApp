import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePath, editContact } from "../../slices/ContactSlice";
import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import { ContactSchema } from "../../validation/ContactValidation";
import { liver } from "../../colors/color";
import { HeightCalculation } from "../../slices/UiSlice";
import CustomForm from "../../Common/CustomForm";

const EditContact = () => {
    let groupId;
    const dispatch = useDispatch();
    const { contactId } = useParams();
    const contact = useSelector(state => state.contacts.items.find(item => item.id === parseInt(contactId)));
    console.log(contact);
    // const groups = useSelector(state => state.groups.items);
    // console.log(groups);
    const navigate = useNavigate();
    const { items } = useSelector(state => state.groups);
    const isDark = useSelector(state => state.theme.isDark);
    const [docHeight, setDocHeight] = useState(0);
    const { pathname } = useLocation();


    useEffect(() => {
        dispatch(changePath(false));
    }, []);

    useEffect(() => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'auto',
        });
    }, [pathname]);  // baraye inke scroll har safhe joda bashad.

    useEffect(() => {
        dispatch(HeightCalculation(docHeight + 350));
    }, [docHeight]);

    const measuredRef = useCallback(node => {
        if (node !== null) {
            setDocHeight(node.getBoundingClientRect().height);
        }
    }, []);

    const EditContact = (values) => {
        dispatch(editContact(values));
        navigate("/contactManagerApp");
    }


    const initialValues = {...contact};
    console.log(initialValues);

    const formik = useFormik({
        initialValues,
        validationSchema: ContactSchema,
        onSubmit: (values) => {
            EditContact(values);
        },
        enableReinitialize: true
    });

    const inputs = [
        {valueOfFormikName: "fullname", label: "نام و نام خانوادگی"},
        {valueOfFormikName: "photo", label: "آدرس تصویر"},
        {valueOfFormikName: "mobile", label: "شماره موبایل"},
        {valueOfFormikName: "email", label: "شماره موبایل"},
        {valueOfFormikName: "job", label: "شماره موبایل"},
    ];


    if (typeof contact === "undefined") {
        return (
            <Typography variant="h4" textAlign={"center"}>هنوز اطلاعات نیامده چند لحظه وایسا خداوکیل.</Typography>
        )
    }

    else {
        console.log(contact);
        return (
            <>
                {/* <Typography>&nbsp;</Typography> */}
                <Box sx={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, width: { xs: "80%", sm: 560, md: 850, lg: 1220 }, m: "0 auto", mt: 13, backgroundColor: isDark ? grey[900] : "" }}>
                    <div ref={measuredRef}>
                        <Typography variant="h5" fontWeight="bold" fontSize={27} mb={5} color={isDark ? "#00e5ff" : "rgb(0, 133, 153)"} textAlign="center">ویرایش مخاطب</Typography>
                         <Card sx={{
                            boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
                            padding: "16px 0 16px 10px",
                            borderRadius: 3,
                            mb: "10px !important",
                            backgroundColor: isDark ? liver : grey[300]
                        }}>
                            <Grid container spacing={2}>
                                <Grid xs={12} md={0}>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            display: { xs: "block", md: "none" },
                                            width: { xs: 190, sm: 220, md: 290, lg: 340 },
                                            objectFit: "fill", borderRadius: 2, margin: {
                                                xs: "0 auto",
                                                md: 0
                                            },
                                            mt: { sm: 4.5, md: 3 }
                                        }}
                                        image={contact.photo}
                                        alt="Live from space album cover"
                                    />
                                </Grid>
                                <Grid xs={11} md={7} lg={8} sx={{ display: 'flex', flexDirection: 'column', pr: 1.9 }}>
                                    <CustomForm formik={formik} inputs={inputs} />
                                </Grid>
                                <Grid xs={0} md={4} lg={3}>
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            display: { xs: "none", md: "block" },
                                            width: { xs: 300, sm: 220, md: 290, lg: 320 },
                                            objectFit: "fill", borderRadius: 2, margin: {
                                                xs: "0 auto",
                                                md: 0
                                            },
                                            mt: { sm: 4.5, md: 5 }
                                        }}
                                        image={contact.photo}
                                        alt="Live from space album cover"
                                    />
                                </Grid>
                            </Grid>



                        </Card>
                        <Typography mt={2}>&nbsp;</Typography>
                    </div>
                </Box >
            </>
        );
    }
}

export default EditContact;