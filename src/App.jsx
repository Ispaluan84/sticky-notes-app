import React from 'react';
import './App.css';
import { ColorProvider } from './context/ColorContext';
import { ColorSelector } from './components/ColorSelector';
import { NoteBoard } from './components/NoteBoard';


function App() {
  return (
    <ColorProvider>
    <div className="app" style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Sticky Notes</h1>
      <ColorSelector />
      <NoteBoard />
    </div>
    </ColorProvider>
    
  )
}

export default App
