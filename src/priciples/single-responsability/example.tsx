export const codeSnippet = `import React, { useState } from 'react';

// Base Button component - closed for modification, open for extension
const Button: React.FC<{ onClick: () => void; label: string }> = ({
    onClick,
    label,
}) => {
    return <button onClick={onClick}>{label}</button>;
};

// Extension: Specific button with custom behavior
const ClickableButton: React.FC<{ setMessage: React.Dispatch<React.SetStateAction<string>> }> = ({ setMessage }) => {
    const handleClick = () => {
        setMessage("Button clicked!");
    };

    return <Button onClick={handleClick} label="Click here" />;
};

// Main Component - uses the extended Button without modifying the base Button component
const MyComponent: React.FC = () => {
    const [message, setMessage] = useState<string>("");

    return (
        <div>
            <ClickableButton setMessage={setMessage} />
            {message && <h1>{message}</h1>}
        </div>
    );
};

export default MyComponent;
`;
