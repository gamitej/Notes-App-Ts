import { useState } from "react";
// comp
import Notes from "@/comp/Notes";
import Header from "@/comp/Header";
import CreateNote from "@/comp/CreateNote";
// mui
import { Box } from "@mui/material";
// models
import { NoteObject } from "./models/createNote";

function App() {
  // =================== STATES ======================
  const [notes, setNotes] = useState<NoteObject[]>([]);

  // ================ EVENT-HANDLER ======================
  const AddNote = (note: NoteObject) => {
    setNotes((prevNotes) => [note, ...prevNotes]);
  };

  const handleDeleteNote = (id: string) => {};

  console.log(notes);

  /**
   * JSX
   */
  return (
    <div>
      <Header />
      <Box style={{ padding: "10px" }}>
        <CreateNote AddNote={AddNote} />
        <Notes notes={notes} handleDeleteNote={handleDeleteNote} />
      </Box>
    </div>
  );
}

export default App;
