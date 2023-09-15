import React from 'react';
import './ToggleSwitch.css';

function ToggleSwicth() {
    return (
        <div>
            <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
            </label>
        </div>
    );
}

export default ToggleSwicth;