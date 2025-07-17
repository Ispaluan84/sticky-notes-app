import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export const useNotes = () => {
    const [ notes, setNotes ] = useState([])


const addNote = (text, color) => {
    if (!text.trim()) return;
    if(notes.length >= 10) return

    const newNote = {id: uuidv4(), text, color};
    setNotes([newNote, ...notes])
};

const deleteNote = id => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return { notes, addNote, deleteNote };

};























