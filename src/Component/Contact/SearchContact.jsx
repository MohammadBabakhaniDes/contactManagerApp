import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { Search } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { searchContact } from "../../slices/ContactSlice";
import { useTheme } from "@mui/material";

export const SearchContact = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("none");
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark" ? true : false;

  const handleDisplaySearch = () => {
    search === "none" ? setSearch("flex") : setSearch("none");
  };
  const iconSearch = search === "none" ? "block" : "none";

  return (
    <>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: search,
          alignItems: "center",
          width: { xs: 280, sm: 400 },
          ml: 2,
          border: "1px solid #aaa",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="جست و جوی مخاطب"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => {
            dispatch(searchContact(e.target.value));
          }}
        />
        <IconButton
          onClick={handleDisplaySearch}
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
          color="success"
        >
          <Search />
        </IconButton>
      </Paper>
      <IconButton
        onClick={handleDisplaySearch}
        type="button"
        sx={{
          width: 48,
          height: 48,
          borderRadius: 2,
          p: "10px",
          display: iconSearch,
          backgroundColor: isDark ? "#fff" : "#444",
        }}
        aria-label="search"
        color="secondary"
      >
        <Search />
      </IconButton>
    </>
  );
};
