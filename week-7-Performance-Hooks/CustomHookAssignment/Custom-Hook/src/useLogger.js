// useLogger.js
import { useState } from 'react';

export const useLogger = () => {
    const [scope, setScope] = useState('');
    const [message, setMessage] = useState('');
    const [logLevel, setLogLevel] = useState('LOG');
    const [consoleLogs, setConsoleLogs] = useState([]);

    const handleScopeChange = (e) => setScope(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);
    const handleLogLevelChange = (e) => setLogLevel(e.target.value);

    const submitLog = () => {
        const timestamp = new Date().toLocaleString();
        const formattedLog = ` [${scope}] [${timestamp}] ${message}`;
        setConsoleLogs([...consoleLogs, formattedLog]);

        // Log to browser's developer console based on the log level
        switch (logLevel) {
            case 'ERROR':
                console.error(formattedLog);
                break;
            case 'WARN':
                console.warn(formattedLog);
                break;
            case 'LOG':
                console.log(formattedLog);
                break;
            case 'DEBUG':
                console.debug(formattedLog);
                break;
            default:
                console.log(formattedLog);
                break;
        }
    };

    return {
        scope,
        handleScopeChange,
        message,
        handleMessageChange,
        logLevel,
        handleLogLevelChange,
        consoleLogs,
        submitLog,
    };
};
