import { Box, Button, styled } from "@mui/material";

export const dialogStyles = {
  maxHeight: "100%",
  maxWidth: "100%",
  height: "80%",
  width: "80%",
  borderRadius: "10px 10px 0 0",
};

export const Container = styled(Box)({
  flex: 1,
  display: "flex",
  flexDirection: "column",
});

export const Header = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  background: "#f2f6fc",
  "& > p": {
    fontSize: 14,
    fontWeight: 500,
  },
});

export const ContentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: "0 15px",
  "& > div": {
    fontSize: 14,
    borderBottom: "1px solid #F5F5F5",
    marginTop: 10,
  },
});

export const Footer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 15px",
  marginTop: "auto",
});

export const SendButton = styled(Button)({
  background: "#0B57D0",
  color: "#fff",
  textTransform: "uppercase",
  fontWeight: 500,
  borderRadius: 18,
  width: 100,
});

export default {
  dialogStyles,
  Container,
  Header,
  ContentWrapper,
  Footer,
  SendButton,
};
