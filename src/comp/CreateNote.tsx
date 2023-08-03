import React, { useState } from "react";
// models
import { CreateNoteProps, NoteObject } from "@/models/note";
// mui
import { Box, Button, InputBase, styled } from "@mui/material";

const Container = styled(Box)`
  & > * {
    margin: 20px 20px 0px 0px;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    width: 300px;
    padding-right: 15px;
  }
  & > div > input[type="color"] {
    width: 40px;
    height: 30px;
    position: relative;
    bottom: -10px;
  }
  & > span {
    position: relative;
    right: 60px;
    font-size: 12px;
  }
`;

const CreateNote: React.FC<CreateNoteProps> = () => {
  // ================= STATES ====================
  const [note, setNote] = useState<NoteObject>({
    id: 0,
    title: "",
    details: "",
    color: "",
    date: new Date().toLocaleString().toString(),
  });

  // ================= EVENT-HANDLER ====================
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setNote((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  console.log(note);

  /**
   * JSX
   */

  return (
    <Container>
      <InputBase
        placeholder="Enter title"
        name="title"
        onChange={handleChange}
      />
      <Box component="span">30</Box>
      <InputBase placeholder="Enter details" name="details" />
      <Box component="span">50</Box>
      <InputBase type="color" defaultValue={"#F5F5F5"} />
      <Button variant="outlined" onClick={handleSubmit}>
        CREATE
      </Button>
    </Container>
  );
};

export default CreateNote;
