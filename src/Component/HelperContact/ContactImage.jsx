import { CardMedia } from "@mui/material";

const ContactImage = ({contact}) => {
    return (
        <CardMedia
            component="img"
            sx={{
                width: 180, height: 200, objectFit: "fill", borderRadius: 2, margin: {
                    xs: "0 auto",
                    md: 0
                }
            }}
            image={contact.photo}
            // style={{borderRadius: 8}}
            alt="Live from space album cover"
        />
    );
}

export default ContactImage;