import React from "react";
// mui
import { Button } from "@mui/material";
// models
import { NotesProps } from "@/models/note";

const Notes: React.FC<NotesProps> = ({ notes, handleDeleteNote }) => {
  return (
    <div className="p-2">
      <h1 className="p-2 text-2xl">Notes</h1>
      <div className="grid grid-cols-12 gap-x-2">
        {notes?.map((item, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: item.color }}
            className={`md:col-span-4 lg:col-span-3 border p-3 rounded-lg h-[15rem] flex flex-col justify-between`}
          >
            <p className="capitalize underline">{item.title}</p>
            <div className="flex flex-col justify-evenly h-[80%]">
              <p>{item.details}</p>
              <p>{item.date}</p>
            </div>
            <Button
              variant="contained"
              onClick={() => handleDeleteNote(item.id)}
            >
              DELETE
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
