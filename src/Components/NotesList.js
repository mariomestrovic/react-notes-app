import React from "react";
import NoteItem from "./NoteItem";

export default function NotesList({ notes, deleteNote }) {
  return (
    <div className="notes-wrapper">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          text={note.text}
          deleteNote={deleteNote}
        />
      ))}
    </div>
  );
}
