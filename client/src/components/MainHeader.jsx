import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  InputBase,
  IconButton,
} from "@mui/material";
import {
  Menu,
  Search,
  Tune,
  HelpOutlineOutlined,
  AppsOutlined,
  AccountCircleOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import { gmailLogo } from "../constants/consts";

const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});

const SearchWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  minWidth: 690,
  maxWidth: 720,
  background: "#EAF1FB",
  padding: "0 10px",
  borderRadius: "0.5rem",
  marginLeft: 80,
  height: 64,
  "& > div": {
    width: "100%",
    padding: 10,
  },
});

const OptionsWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  gap: 20,
});

export default function MainHeader({ toggleDrawer }) {
  return (
    <div>
      <StyledAppBar position="static">
        <Toolbar>
          <IconButton onClick={toggleDrawer}>
            <Menu color="action" />
          </IconButton>
          <img
            src={gmailLogo}
            alt="gmail-logo"
            style={{ width: 110, marginLeft: 15 }}
          />
          <SearchWrapper>
            <Search color="action" />
            <InputBase placeholder="Search mail" />
            <Tune color="action" />
          </SearchWrapper>
          <OptionsWrapper>
            <HelpOutlineOutlined color="action" />
            <SettingsOutlined color="action" />
            <AppsOutlined color="action" />
            <AccountCircleOutlined color="action" />
          </OptionsWrapper>
        </Toolbar>
      </StyledAppBar>
    </div>
  );
}
