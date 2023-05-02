import { Box, Button, styled } from "@mui/material";

export const ComposeBtn = styled(Button)({
  background: "#c2e7ff",
  color: "#001d35",
  padding: 15,
  borderRadius: "1rem",
  textTransform: "none",
  minWidth: 140,
});

export const Container = styled(Box)({
  padding: "0.5rem",
  "& > ul": {
    padding: "10px 0 0 5px",
    fintSize: 14,
    fontWeight: "500",
    cursor: "pointer",
  },
});

export default {
  ComposeBtn,
  Container,
};
