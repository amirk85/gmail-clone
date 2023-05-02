import { CreateOutlined } from "@mui/icons-material";
import { List, ListItem } from "@mui/material";
import React, { Fragment, useState } from "react";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";
import { createPortal } from "react-dom";
import { Container, ComposeBtn } from "../custom-styles/sidebar-content";

export default function SideBarContent() {
  const [openDialog, setOpenDialog] = useState(false);

  function onComposeBtnClick() {
    setOpenDialog(true);
  }

  return (
    <Container>
      <ComposeBtn onClick={onComposeBtnClick}>
        <CreateOutlined /> &nbsp; Compose
      </ComposeBtn>
      <List>
        {SIDEBAR_DATA.map((data) => (
          <ListItem key={data.name}>
            <data.icon fontSize="small" sx={{ marginRight: "20px" }} />
            {data.label}
          </ListItem>
        ))}
      </List>

      <Fragment>
        {openDialog &&
          createPortal(
            <ComposeMail
              openDialog={openDialog}
              setOpenDialog={setOpenDialog}
            />,
            document.getElementById("dialog-root")
          )}
      </Fragment>
    </Container>
  );
}
