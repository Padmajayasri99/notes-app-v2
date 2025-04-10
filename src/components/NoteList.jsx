import React from "react";
import "./NoteList.css";

function NoteList({
  notes,
  selectedNoteIndex,
  setSelectedNoteIndex,
  addNote,
  deleteNote,
}) {
  return (
    <div className="note-list">
      <h2>📝 My Notes</h2>
      <button onClick={addNote} className="add-btn">+ Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li
            key={note.id}
            className={index === selectedNoteIndex ? "selected" : ""}
            onClick={() => setSelectedNoteIndex(index)}
          >
            <span>{note.title}</span>
            <button onClick={(e) => { e.stopPropagation(); deleteNote(index); }}>
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
