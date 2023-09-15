import './ToggleSwitch.css';
import React, { useState } from 'react';

function ToggleSwicth({ defaultValue = false, onValueChange, rounded = false }) {
    const [isToggled, setIsToggled] = useState(defaultValue);

    const toggleSwitch = () => {
        const newValue = !isToggled;
        setIsToggled(newValue);
        onValueChange(newValue)
    };

    return (
        <div>
            <label className={`switch ${rounded ? 'rounded' : ''}`}>
                <input type="checkbox" onChange={toggleSwitch} checked={isToggled}/>
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default ToggleSwicth;