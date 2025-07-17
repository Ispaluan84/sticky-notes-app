import React, { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';

 export const ColorSelector = () => {
    const { color, setColor } = useContext(ColorContext);
    return (
        <div className='color-selevtor' style={{ marginBottom: '1rem' }}>
            <label> 
                Color predeterminado:
                <input type='color' value={color} onChange={(e) => setColor(e.target.value)} style={{ marginLeft: '0.5rem'}}/>
            </label>
        </div>
    );
};

