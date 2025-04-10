import React, { useState } from "react";
import NoteEditor from "./components/NoteEditor";
import NoteList from "./components/NoteList";
import NoteViewer from "./components/NoteViewer";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const addNote = () => {
    const newNote = { id: Date.now(), title: "Untitled", content: "" };
    setNotes([newNote, ...notes]);
    setSelectedNoteIndex(0);
  };

  const deleteNote = (index) => {
    const updated = [...notes];
    updated.splice(index, 1);
    setNotes(updated);
    setSelectedNoteIndex(null);
  };

  const updateNote = (updatedContent) => {
    const updatedNotes = [...notes];
    updatedNotes[selectedNoteIndex].content = updatedContent;
    setNotes(updatedNotes);
  };

  return (
    <div className="app">
      <NoteList
        notes={notes}
        selectedNoteIndex={selectedNoteIndex}
        setSelectedNoteIndex={setSelectedNoteIndex}
        addNote={addNote}
        deleteNote={deleteNote}
      />
      {selectedNoteIndex !== null ? (
        <NoteEditor
          value={notes[selectedNoteIndex].content}
          onUpdate={updateNote}
        />
      ) : (
        <NoteViewer />
      )}
    </div>
  );
}

export default App;
