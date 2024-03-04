import React, { useState } from 'react';

function ColorPicker() {
    // State hook for storing selected color
    const [color, setColor] = useState("#FFFFFF");

    // Event handler for color change
    function handleColorChange(event) {
        setColor(event.target.value);
    }

    // Render component
    return (
        <div className='color-picker-container'>
            {/* Heading */}
            <h1>Color Picker</h1>
            {/* Display current color */}
            <div className='color-display' style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            {/* Color input field */}
            <label htmlFor="">Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
}

export default ColorPicker;
