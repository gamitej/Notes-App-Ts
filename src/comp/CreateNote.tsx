import React, { useState } from "react";
import { v4 as _id } from "uuid";
// models
import { CreateNoteProps, NoteObject } from "@/models/createNote";
// mui
import { Box, Button, InputBase, Typography, styled } from "@mui/material";

const Container = styled(Box)`
  & > * {
    margin: 20px 20px 0px 0px;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    width: 300px;
    padding-right: 15px;
    padding: 5px;
  }
  & > div > input[type="color"] {
    width: 40px;
    height: 30px;
    position: relative;
    bottom: -10px;
    right: 20px;
  }
  & > span {
    position: relative;
    right: 60px;
    font-size: 12px;
  }
  & > button {
    position: relative;
    top: -2px;
  }
`;

const Error = styled(Typography)`
  background-color: lightpink;
  color: #fff;
  padding: 5px;
  width: 50%;
`;

const noteDefaultObject = {
  id: "",
  title: "",
  details: "",
  color: "#F5F5F5",
  date: new Date().toLocaleString().toString(),
};

const CreateNote: React.FC<CreateNoteProps> = ({ AddNote }) => {
  // ================= STATES ====================
  const [error, setError] = useState<string>("");
  const [note, setNote] = useState<NoteObject>(noteDefaultObject);

  // ================= EVENT-HANDLER ====================
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setNote((prevState) => ({ ...prevState, [name]: value }));
    setError("");
  };

  const ResetNote = () => {
    setNote(noteDefaultObject);
    setError("");
  };

  const handleCreateNote = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!note.title && !note.details) {
      setError("All fields are required");
      return;
    }
    AddNote({ ...note, id: _id() });
    ResetNote();
  };

  /**
   * JSX
   */

  return (
    <Container>
      <InputBase
        name="title"
        placeholder="Enter title"
        value={note.title}
        onChange={handleChange}
        inputProps={{ maxLength: 30, autoCorrect: "none" }}
      />
      <Box component="span">{note.title.length}/30</Box>
      <InputBase
        name="details"
        value={note.details}
        placeholder="Enter details"
        onChange={handleChange}
        inputProps={{ maxLength: 50, autoCorrect: "none" }}
      />
      <Box component="span">{note.details.length}/50</Box>
      <InputBase
        name="color"
        type="color"
        value={note.color}
        onChange={handleChange}
      />
      <Button variant="outlined" onClick={handleCreateNote}>
        CREATE
      </Button>
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default CreateNote;
