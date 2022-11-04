import React from 'react';

interface ScrollProps {
  children: React.ReactNode;
}

const Scroll = ({ children }: ScrollProps): JSX.Element => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '5px solid black',
        height: '800px',
        padding: '1rem',
        marginTop: '1rem',
      }}>
      {children}
    </div>
  );
};

export default Scroll;
