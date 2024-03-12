import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CusLink = ({ to, children, px="8vw", fs=20, fw="bold", icon, w=450, bcolor="#3f51b5", color="#fff", m="0 auto" }) => {
    return (
        <>
            <Typography textAlign={"center"}>
                <Link to={to}
                    style={{
                        fontSize: fs, textDecoration: "none",
                        backgroundColor: bcolor, color: color, borderRadius: 8,
                        fontWeight: fw, padding: `6px ${px} 6px ${px}`, display: "flex", alignItems: "center",justifyContent: "center",
                        width: w, margin: m
                    }}
                >
                    {children} {icon}
                </Link>
                
            </Typography>
        </>
    );
}

export default CusLink;