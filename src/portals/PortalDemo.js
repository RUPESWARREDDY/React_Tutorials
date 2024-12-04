import React from 'react'
import ReactDOM from 'react-dom';

function PortalDemo() {
  return ReactDOM.createPortal(<h1>Hello world</h1>,document.getElementById('Portal-root'))
  
}

export default PortalDemo
