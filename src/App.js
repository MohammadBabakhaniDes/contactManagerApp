import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { Typography, useMediaQuery } from "@mui/material";
import { AddCircle } from "@mui/icons-material";
import { useEffect } from "react";
import { changePath } from "./slices/ContactSlice";
import { ChangeTime, ChooseTheme } from "./slices/ThemeSlice";
import CusLink from "./Common/Link";
import { amber, darkblue } from "./colors/color";
import Contacts from "./Component/Contact/Contacts";

const App = () => {
  let { statues } = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const prefersDarkMode = useMediaQuery("(prefers-color-schema:dark)");
  const isDark = useSelector((state) => state.theme.isDark);
  const mode = prefersDarkMode ? "dark" : "light";
  const time = useSelector((state) => state.theme.time);

  useEffect(() => {
    dispatch(changePath(true));
    if (time === 0) {
      dispatch(ChooseTheme(mode));
      dispatch(ChangeTime());
    } else {
      console.log("hichi");
    }
  }, []);

  if (statues === "pending") {
    return (
      <Typography variant="h4" textAlign={"center"}>
        یه لحظه وایسا برادر عزیز الان دیتا میاد.
      </Typography>
    );
  } else if (statues === "success") {
    return (
      <>
        <Typography> &nbsp;</Typography>
        <CusLink
          m="0"
          to={"/contacts/add"}
          w={232}
          color={isDark ? "#fff" : "#000"}
          bcolor={isDark ? darkblue : amber}
          fw="normal"
          icon={<AddCircle sx={{ ml: 0.5, mt: 0.1 }} />}
          px={"2vw"}
          fs={17}
        >
          ساخت مخاطب جدید
        </CusLink>
        <Contacts />
      </>
    );
  } else {
    return (
      <Typography variant="h3" textAlign={"center"}>
        ارور 404
      </Typography>
    );
  }
};

export default App;
