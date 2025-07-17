import React, { useContext, useState } from 'react';
import { useNotes } from '../hooks/useNotes.jsx';
import { ColorContext } from '../context/ColorContext';
import { Note } from './Note';

  export const NoteBoard = () => {
  const { notes, addNote, deleteNote } = useNotes();
  const { color } = useContext(ColorContext);
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(text, color);
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='note-form'>
        <input
          type="text"
          className='note-input'
          placeholder="Escribe tu nota..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit" className='add-button'>
          Añadir
        </button>
      </form>

      {notes.length === 0 ? (
        <p className='no-notes'>No hay notas</p>
      ) : (
        <div className='note-board'>
          {notes.map((note) => (
            <Note key={note.id} note={note} onDelete={deleteNote} />
          ))}
        </div>
      )}
    </div>
  );
};




