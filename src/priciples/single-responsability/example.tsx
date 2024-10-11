export const codeSnippet = `
import React, { useState } from 'react';

// function that handle the form submit out of the main component
const handleSubmit = (email: string, password: string) => {
  console.log('Email:', email, 'Password:', password);
  alert(Email: $ {email}, Password: $ {password});
};

// main component just rendering the content
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button onClick={() => handleSubmit(email, password)}>Login</button>
    </div>
  );
};

export default LoginForm;
`;
