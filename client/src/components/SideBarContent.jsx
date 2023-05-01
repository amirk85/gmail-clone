import { CreateOutlined } from "@mui/icons-material";
import { Box, Button, styled, List, ListItem } from "@mui/material";
import React from "react";
import { SIDEBAR_DATA } from "../config/sidebar.config";

export default function SideBarContent() {
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

  return (
    <Container>
      <ComposeBtn variant="outlined ">
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
    </Container>
  );
}
