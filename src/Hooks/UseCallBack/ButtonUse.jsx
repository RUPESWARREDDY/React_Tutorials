import React from 'react'
function ButtonUse({handleClick,children}) {
    console.log(`increment${children}`);
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}
export default React.memo(ButtonUse)
