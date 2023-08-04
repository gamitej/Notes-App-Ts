import { NoteObject } from "./createNote";

export interface NotesProps {
  notes: NoteObject[];
  handleDeleteNote: (id: string) => void;
}
