// Console.jsx
import React from 'react';
import './Console.css'; // Your styles for this component
import { useLogger } from '../../useLogger.js'; // Ensure the path is correct

const Console = () => {
    const {
        scope,
        handleScopeChange,
        message,
        handleMessageChange,
        logLevel,
        handleLogLevelChange,
        consoleLogs,
        submitLog,
    } = useLogger();

    return (
        <div className="container">
            <div className="flex-container">
                <input
                    type="text"
                    placeholder="SCOPE"
                    value={scope}
                    onChange={handleScopeChange}
                    className="input-field"
                />
                <select value={logLevel} onChange={handleLogLevelChange} className="input-field">
                    <option value="ERROR">ERROR</option>
                    <option value="WARN">WARN</option>
                    <option value="LOG">LOG</option>
                    <option value="DEBUG">DEBUG</option>
                </select>
                <button onClick={submitLog} className="button">Submit</button>
            </div>

            <textarea
                placeholder="Message"
                value={message}
                onChange={handleMessageChange}
                rows="3"
                className="input-field"
            />

            <div className="log-section">
                <h3>Console Logs</h3>
                <textarea
                    value={consoleLogs.join('\n')}
                    readOnly
                    rows="10"
                    className="console"
                />
            </div>
        </div>
    );
};

export default Console;
