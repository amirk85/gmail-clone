import { Close, DeleteOutline } from "@mui/icons-material";
import {
  Dialog,
  IconButton,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  dialogStyles,
  Footer,
  Header,
  Container,
  ContentWrapper,
  SendButton,
} from "../custom-styles/compose-mail";

const config = {
  Host: "smtp.elasticemail.com",
  Username: "kazuha321@yopmail.com",
  Password: "D3B75B1A7B089C6E1F6D1797A74D14A6C187",
  Port: 2525,
};

export default function ComposeMail({ openDialog, setOpenDialog }) {
  const [inputData, setInputData] = useState({});

  function onCloseDialog(e) {
    e.preventDefault();
    setOpenDialog(false);
  }

  function onSendMail(e) {
    e.preventDefault();
    if (window.Email) {
      window.Email.send({
        ...config,
        To: inputData.to,
        From: "khanamir8589@gmail.com",
        Subject: inputData.subject,
        Body: inputData.body,
      }).then((message) => alert(message));
    }
    setOpenDialog(false);
  }

  function handleChange(e) {
    setInputData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
    console.log(inputData);
  }

  return (
    <Dialog open={openDialog} PaperProps={{ sx: dialogStyles }}>
      <Container>
        <Header>
          <Typography fontWeight={500}> New Message </Typography>
          <IconButton onClick={(e) => onCloseDialog(e)}>
            <Close fontSize="small" />
          </IconButton>
        </Header>
        <ContentWrapper>
          <InputBase
            placeholder="Recipients"
            name="to"
            onChange={(e) => handleChange(e)}
          />
          <InputBase
            name="subject"
            placeholder="Subject"
            onChange={(e) => handleChange(e)}
          />
        </ContentWrapper>
        <TextField
          multiline
          placeholder="Text Area"
          name="body"
          rows={12}
          onChange={(e) => handleChange(e)}
          sx={{
            "&  .MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
        />
        <Footer>
          <SendButton variant="contained" onClick={(e) => onSendMail(e)}>
            Send
          </SendButton>
          <IconButton>
            <DeleteOutline aria-label="delete" />
          </IconButton>
        </Footer>
      </Container>
    </Dialog>
  );
}
