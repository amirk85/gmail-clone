import { AppBar, styled, Box } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  background: "#F5F5F5",
  boxShadow: "none",
});

export const SearchWrapper = styled(Box)({
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

export const OptionsWrapper = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "end",
  gap: 20,
});
