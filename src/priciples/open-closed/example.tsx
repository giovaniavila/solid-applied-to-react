export const codeSnippet = `import React from 'react';

// base button component
const Button = ({ label, onClick, style }: { label: string, onClick: () => void, style?: React.CSSProperties }) => {
  return (
    <button onClick={onClick} style={style}>
      {label}
    </button>
  );
};

export default Button;

import React from 'react';
import Button from './Button';

// extended button to create PrimaryButton
const PrimaryButton = ({ label, onClick }: { label: string, onClick: () => void }) => {
  const primaryStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
  };

  return <Button label={label} onClick={onClick} style={primaryStyle} />;
};

// extended button to create DangerButton
const DangerButton = ({ label, onClick }: { label: string, onClick: () => void }) => {
  const dangerStyle = {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
  };

  return <Button label={label} onClick={onClick} style={dangerStyle} />;
};

export { PrimaryButton, DangerButton };

`;
