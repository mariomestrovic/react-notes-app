import React, { useState, useEffect } from "react";

export default function NoteCreator({
  createNewNote,
  value,
  setNoteText,
  handleKeyPress,
}) {
  return (
    <div className="creator-wrapper">
      <input
        name="newNote"
        type="text"
        className="note-input"
        placeholder="Write your note here..."
        onChange={(e) => setNoteText(e.target.value)}
        value={value}
        maxLength="115"
        onKeyDown={handleKeyPress}
      />
      <button className="create-note" onClick={createNewNote}>
        Add a note
      </button>
    </div>
  );
}
