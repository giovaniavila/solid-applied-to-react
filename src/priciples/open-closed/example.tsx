export const codeSnippet = `import React, { useState } from 'react';

const handleClick = (setMessage: React.Dispatch<React.SetStateAction<string>>) => {
    setMessage("You clicked!");
};

// Function to render the content
const renderContent = (message: string) => {
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
};

// Main Component
const MyComponent: React.FC = () => {
    const [message, setMessage] = useState<string>("");

    return (
        <div>
            <button onClick={() => handleClick(setMessage)}>Click here</button>
            {renderContent(message)}
        </div>
    );
};

export default MyComponent;
`;
