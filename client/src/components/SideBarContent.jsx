import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, styled, List, ListItem } from "@mui/material";
import React, { Fragment, useState } from "react";
import { SIDEBAR_DATA } from "../config/sidebar.config";
import ComposeMail from "./ComposeMail";
import { createPortal } from "react-dom";

const ComposeBtn = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: "1rem",
  textTransform: "none",
  minWidth: 140,
});

const Container = styled(Box)({
  padding: "0.5rem",
  "& > ul": {
    padding: "10px 0 0 5px",
    fintSize: 14,
    fontWeight: "500",
    cursor: "pointer",
  },
});

export default function SideBarContent() {
  const [openDialog, setOpenDialog] = useState(false);

  function onComposeBtnClick() {
    setOpenDialog(true);
  }

  return (
    <Container>
      <ComposeBtn onClick={onComposeBtnClick}>
        <CreateOutlined /> Compose
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
