import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import NoteCreator from "./Components/NoteCreator";
import NoteItem from "./Components/NoteItem";
import NotesList from "./Components/NotesList";
import { nanoid } from "nanoid";

export default function App() {
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  );

  const [noteText, setNoteText] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  function createNewNote(noteId) {
    if (noteText.trim() === "") {
      window.alert("Please enter a note!");
      return;
    }
    const newNote = {
      id: nanoid(),
      text: noteText,
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setNoteText("");
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      createNewNote();
    }
  }

  function deleteNote(noteId) {
    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  }

  return (
    <div className="app">
      <Header />
      <NoteCreator
        createNewNote={createNewNote}
        value={noteText}
        setNoteText={setNoteText}
        handleKeyPress={handleKeyPress}
      />
      <NotesList notes={notes} deleteNote={deleteNote} />
    </div>
  );
}
