import { Button } from "@mui/material";
import Input from "./Input";
import { useNavigate } from "react-router-dom";


const CustomForm = ({ formik, inputs=[], selects=[], ml }) => {
    
    const navigate = useNavigate();
   
    return (
        <form style={{ marginTop: 55 }} onSubmit={formik.handleSubmit}>
            {
                inputs.map(input => (
                    <Input ml={ml} touched={formik.touched[input.valueOfFormikName]} error={formik.errors[input.valueOfFormikName]} formik={{ ...formik.getFieldProps(input.valueOfFormikName) }} label={input.label} />
                ))
            }
            {
                selects.map(select => (
                    <Input ml={ml} select={true} menuOfSelect={select.menuOfSelect} touched={formik.touched[select.valueOfFormikName]} error={formik.errors[select.valueOfFormikName]} formik={{ ...formik.getFieldProps(select.valueOfFormikName) }} label={select.label} />        
                ))
            }
            
            <Button type="submit" variant="contained" color="success" sx={{ ml: 10, my: 3, p: "8px 15px", fontSize: 15 }}>ساخت مخاطب</Button>
            <Button variant="contained" color="warning" sx={{ my: 3, ml: 2 }} onClick={() => {
                navigate("/contactManagerApp");
                formik.values = formik.initialValues
            }}
            >انصراف</Button>
        </form>
    );
}

export default CustomForm;

