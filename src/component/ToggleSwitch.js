import './ToggleSwitch.css';
import React, { useState } from 'react';

function ToggleSwicth({ defaultValue = false }) {
    const [isToggled, setIsToggled] = useState(defaultValue);

    const toggleSwitch = () => {
        setIsToggled(!isToggled);
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