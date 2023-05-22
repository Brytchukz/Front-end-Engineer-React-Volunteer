import React from 'react';

const ContactComponent = () => {
  const headerStyle = {
    background: '#ff9900',
    padding: '20px',
    color: '#ffffff',
    textAlign: 'center',
  };

  const buttonStyle = {
    background: '#ff9900',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <div>
      <div style={headerStyle}>
        <h1>Contact</h1>
      </div>
      <div>
        <button style={buttonStyle}>Sign Up</button>
      </div>
    </div>
  );
};

export default ContactComponent;
