import './ToggleSwitch.css';
import React, { useState } from 'react';

function ToggleSwicth({ defaultValue = false, onValueChange }) {
    const [isToggled, setIsToggled] = useState(defaultValue);

    const toggleSwitch = () => {
        const newValue = !isToggled;
        setIsToggled(newValue);
        onValueChange(newValue)
    };

    return (
        <div>
            <label className="switch">
                <input type="checkbox" onChange={toggleSwitch} checked={isToggled}/>
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default ToggleSwicth;