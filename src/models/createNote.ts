export interface NoteObject {
  id: string;
  title: string;
  details: string;
  color: string;
  date: string;
}

export interface CreateNoteProps {
  AddNote: (note: NoteObject) => void;
}
