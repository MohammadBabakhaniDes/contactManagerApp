import { Box, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import CusLink from "../../Common/Link";
import { useCallback, useEffect, useState } from "react";
import { changePath } from "../../slices/ContactSlice";
import { liver } from "../../colors/color";
import { HeightCalculation } from "../../slices/UiSlice";


const ViewContact = () => {
    const { contactId } = useParams();
    const contact = useSelector(state => state.contacts.items.find(item => item.id == contactId));
    const group = useSelector(state => state.groups.items.find(item => item.id === contact.group));
    const dispatch = useDispatch();
    const isDark = useSelector(state => state.theme.isDark);
    const { pathname } = useLocation();
    const [docHeight, setDocHeight] = useState(0);

    useEffect(() => {
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: 'auto',
        });
      }, [pathname]);   // baraye inke scroll har safhe joda bashad.

    useEffect(() => {
        dispatch(changePath(false));
    }, []);

    useEffect(() => {
        console.log(docHeight);
        dispatch(HeightCalculation(docHeight + 300));
    }, [docHeight]);

    const measuredRef = useCallback(node => {
        if (node !== null) {
            setDocHeight(node.getBoundingClientRect().height);
        }
    }, []);


    if(typeof contact === "undefined") {
        return(
            <Typography variant="h4" textAlign={"center"}>هنوز اطلاعات نیامده چند لحظه وایسا خداوکیل.</Typography>
        )
    }


    else {
        return (
            <Box sx={{ position: "absolute", top: 0, right: 0, bottom: 0, left: 0, width: { xs: "80%", sm: 590, md: 850, lg: 1220 }, m: "0 auto", mt: 13 }}>
                <div ref={measuredRef}>
                <Typography variant="h5" fontWeight="bold" fontSize={27} mb={5} color={"rgb(0, 133, 153)"} textAlign="center">اطلاعات مخاطب</Typography>
                <Card sx={{
                    boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;",
                    padding: "16px 0 16px 10px",
                    borderRadius: 3,
                    // height: { sm: 390, lg: 410 },
                    mb: "10px !important",
                    backgroundColor: isDark ? liver : grey[400]
                }}>
                    <Grid container spacing={3}>
                        <Grid xs={12} sm={3} md={3.7}>
                            <CardMedia
                                component="img"
                                sx={{
                                    width: { xs: 220, sm: 140, md: 200, lg: 240 },
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
                        <Grid xs={12} sm={9} md={8.3} sx={{ display: 'flex', flexDirection: 'column', pr: 1.9 }}>
                            <CardContent sx={{ border: "1px solid #fff", borderRadius: 2, mt: { xs: 0, md: 2 }, backgroundColor: isDark ? grey[900]: "#fff" }}>
                                <Typography p={1.4} pt={0} variant="body1" display="flex" noWrap>
                                    <Typography>نام و نام خانوادگی: &nbsp; </Typography>
                                    <Typography fontWeight="bold">
                                        {contact.fullname}
                                    </Typography>
                                </Typography>
                                <Divider />
                                <Typography p={1.4} variant="body1" fontWeight={"bold"} display="flex">
                                    <Typography fontWeight={"normal"}>شماره موبایل: &nbsp; </Typography> {contact.mobile}
                                </Typography>
                                <Divider />
                                <Typography p={1.4} pb={1.4} variant="body1" display="flex" flexWrap="wrap" noWrap>
                                    <Typography>آدرس ایمیل: &nbsp; </Typography>
                                    <div dir='ltr'>
                                        <Typography fontWeight="bold"
                                        //sx={{ wordBreak: "break-all" }}
                                        >
                                            {contact.email}
                                        </Typography>
                                    </div>
                                </Typography>
                                <Divider />
                                <Typography p={1.4} pb={1.4} variant="body1" display="flex" flexWrap="wrap" noWrap>
                                    <Typography> شغل: &nbsp; </Typography>
                                    <div dir='ltr'>
                                        <Typography fontWeight="bold">
                                            {contact.job}
                                        </Typography>
                                    </div>
                                </Typography>
                                <Divider />
                                <Typography p={1.4} pb={0} variant="body1" fontWeight={"bold"} display="flex">
                                    <Typography fontWeight={"normal"}>گروه: &nbsp; </Typography> {group.name}
                                </Typography>
                            </CardContent>
                        </Grid>
                    </Grid>
                    <Grid xs={12} mb={2} mt={3}>                    
                        <CusLink fs={20} fw="normal" w={"33vw"} px="3vw" to={"/contactManagerApp"}>برگشت به صفحه اصلی</CusLink>
                    </Grid>
                </Card>
                </div>
            </Box>
        );
    }

    
}

export default ViewContact;