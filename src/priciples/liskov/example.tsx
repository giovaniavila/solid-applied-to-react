export const codeSnippet = `
// base component
const Button = ({ onClick, label }: { onClick: () => void; label: string }) => (
  <button onClick={onClick}>{label}</button>
);

// derived component
const PrimaryButton = (props: { onClick: () => void; label: string }) => (
  <Button {...props} style={{ backgroundColor: "blue", color: "white" }} />
);

`;
