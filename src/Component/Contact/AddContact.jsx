import { useDispatch, useSelector } from "react-redux";
import { changePath, createContact } from "../../slices/ContactSlice";
import { useEffect } from "react";
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CustomForm from "../../Common/CustomForm";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../HelperContact/BackgroundImage";
import { useFormik } from "formik";
import { ContactSchema } from "../../validation/ContactValidation";


const AddContact = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const groups = useSelector(state => state.groups.items);

    useEffect(() => {
        dispatch(changePath(false));
    }, []);

    const createContactForm = (values) => {
        dispatch(createContact(values));
        navigate("/contactManagerApp");
    }

    const initialValues = {
        fullname: "",
        photo: "",
        mobile: "",
        email: "",
        job: "",
        group: ""
    };

    const formik = useFormik({
        initialValues,
        validationSchema: ContactSchema,
        onSubmit: (values) => {
            createContactForm(values);
        }
    });

    const inputs = [
        {valueOfFormikName: "fullname", label: "نام و نام خانوادگی"},
        {valueOfFormikName: "photo", label: "آدرس تصویر"},
        {valueOfFormikName: "mobile", label: "شماره موبایل"},
        {valueOfFormikName: "email", label: "آدرس ایمیل"},
        {valueOfFormikName: "job", label: "شغل"},
    ];

    const selects = [
        {valueOfFormikName: "group", label: "انتخاب گروه", menuOfSelect: groups},        
    ];


    return (
        <Card sx={{  mt: 10, position: "absolute", top: 0, right: 0, bottom: 0, left: 0, overflow: 'auto' }}>
            <Typography variant="h5" textAlign="center" color="rgba(0, 150, 39, 1)" mt={4}>ساخت مخاطب جدید</Typography>
            <BackgroundImage />
            <Grid container>
                <Grid xs={9} md={5} lg={3.6}>
                    <CustomForm
                        ml="9vw"
                        formik={formik}
                        inputs={inputs}
                        selects={selects}
                    />
                </Grid>
            </Grid>
        </Card>
    );
}

export default AddContact;