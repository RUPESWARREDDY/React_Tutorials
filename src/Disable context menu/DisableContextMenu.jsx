import React, { useEffect } from 'react';

const Test1 = () => {
  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent the default context menu from appearing
  };

  useEffect(() => {
    
    window.addEventListener('contextmenu', handleContextMenu);
    
   
    return () => {
      window.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div >
      <h1>Right-click is disabled for the entire window!</h1>
    </div>
  );
};

export default Test1;

