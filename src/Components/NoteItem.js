import React from "react";

export default function NoteItem({ id, text, deleteNote }) {
  return (
    <div className="note">
      <img
        src="https://img.icons8.com/plasticine/48/000000/filled-trash.png"
        alt="delete-note"
        className="remove"
        onClick={() => deleteNote(id)}
      />
      <div className="note-content">
        <p>{text}</p>
      </div>
    </div>
  );
}
