import { useEffect, useMemo, useState } from "react";
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
    window.sessionStorage.setItem("getNotes", JSON.stringify([note, ...notes]));
  };

  const handleDeleteNote = (id: string) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);
    window.sessionStorage.setItem("getNotes", JSON.stringify(filterNotes));
  };

  useEffect(() => {
    const getNotes = window.sessionStorage.getItem("getNotes");
    if (getNotes) {
      const notes = JSON.parse(getNotes);
      console.log(notes);
      setNotes(notes);
    }
  }, []);

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
