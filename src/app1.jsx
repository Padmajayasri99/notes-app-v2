import React, { useState, useEffect } from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import NoteViewer from './components/NoteViewer';

const App = () => {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    if (selectedNote?.id === id) setSelectedNote(null);
  };

  const updateNote = (updatedNote) => {
    setNotes(notes.map(note => (note.id === updatedNote.id ? updatedNote : note)));
    setSelectedNote(updatedNote);
  };

  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <NoteEditor addNote={addNote} updateNote={updateNote} selectedNote={selectedNote} />
      <NoteList notes={notes} onSelect={setSelectedNote} onDelete={deleteNote} />
      {selectedNote && <NoteViewer note={selectedNote} />}
    </div>
  );
};

export default App;
