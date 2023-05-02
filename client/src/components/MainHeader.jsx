import React from "react";
import { Toolbar, InputBase, IconButton } from "@mui/material";
import {
  Menu,
  Search,
  Tune,
  HelpOutlineOutlined,
  AppsOutlined,
  AccountCircleOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import {
  StyledAppBar,
  SearchWrapper,
  OptionsWrapper,
} from "../custom-styles/main-header";
import { gmailLogo } from "../constants/consts";

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
