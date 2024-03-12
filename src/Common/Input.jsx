import { MenuItem, TextField } from "@mui/material";
import styles from "./css/Input.module.css";

const Input = ({ touched, error, label, formik, name, select, menuOfSelect, ml }) => {
    // select and menuOfSelect dar sourati ke mikhaim input az noee select bashad.

    if (select === true) {
        return (
            <div>
                <TextField
                    fullWidth                    
                    select
                    {...formik}
                    error={Boolean(touched && error)}
                    helperText={error && touched ? error : null}
                    label={label}
                    sx={{
                        "& .MuiInputBase-input": { height: 2 }, ml: ml, // 9vw
                        "& .MuiInputBase-input": { minHeight: "7px !important", paddingBottom: 1.6, display: "flex", alignItems: "center" },
                        "& .MuiOutlinedInput-input": { height: "7px !important" }
                    }}
                    color="success"
                >
                    <MenuItem value={""}>None</MenuItem>
                    {
                        menuOfSelect.map((men) => (
                            <MenuItem value={men.id}>{men.name}</MenuItem>
                        ))
                    }
                </TextField>
            </div>
        )
    }

    return (
        <div>
            <TextField
                fullWidth
                {...formik}
                error={Boolean(touched && error)}
                helperText={error && touched ? error : null}
                label={label}
                sx={{ "& .MuiInputBase-input": { height: 2 }, ml: ml }}// 9vw
                color="success"
            />
        </div>
    );
}

export default Input;