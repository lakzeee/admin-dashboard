import { useDispatch } from "react-redux";
import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from "@mui/material";
import {DarkModeOutlined, Menu as MenuIcon, Search} from "@mui/icons-material";
import FlexBetween from "./flex-between";
import { setMode } from "../state";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        {/*LEFT SIDE*/}
        <FlexBetween>
          <IconButton onClick={() => console.log("Open/Close sidebar")}>
            <MenuIcon />
          </IconButton>
        </FlexBetween>
        <FlexBetween
          backgroundColor={theme.palette.background.alt}
          borderRadius="9px"
          gap="3rem"
          p="0.1rem 1.5rem"
        >
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
        {/*RIGHT SIDE*/}
        <FlexBetween gap="1.5rem">
          <IconButton onClick={() => dispatch(setMode())} />
          {theme.palette.mode ==="dark"?(
              <DarkModeOutlined sx={{fontSize:"25px"}}/>
          )}
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
