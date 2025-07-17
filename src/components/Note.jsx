import React from 'react';

export const Note = ({ note, onDelete}) => {
    const { id, text, color} = note;
    return (
        <div className='note' style={{ backgroundColor: color, position: 'relative', }}>
            <p className='note-text'>{text}</p>
            <button className='note-delete'
                onClick={() => onDelete(id)}
                aria-label='Eliminar nota'
          >
                x
            </button>
        </div>
    );
}
