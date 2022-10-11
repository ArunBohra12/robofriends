const Scroll = ({ children }) => {
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
