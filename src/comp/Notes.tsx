import React from "react";
// mui
import { Box, Grid, Typography, styled } from "@mui/material";
// models
import { NotesProps } from "@/models/note";

const Notes: React.FC<NotesProps> = ({ notes }) => {
  return (
    <div className="p-2">
      <h1 className="p-2 text-2xl">Notes</h1>
      <div className="grid grid-cols-12 gap-x-2">
        {notes?.map((item, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: item.color }}
            className={`lg:col-span-3 border p-3 rounded-lg`}
          >
            <p>{item.title}</p>
            <p>{item.details}</p>
            <p>{item.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notes;
