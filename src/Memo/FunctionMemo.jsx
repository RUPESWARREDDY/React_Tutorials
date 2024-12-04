import { memo } from "react";
import React from 'react'

function FunctionMemo({name}) {
    console.log('Rendering Memo Component');
  return (
    <div>
      {name}
    </div>
  )
}

export default memo(FunctionMemo)