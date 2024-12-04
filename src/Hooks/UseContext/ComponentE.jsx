import React, { useContext } from 'react'
import { userContext } from '../../App'


function ComponentE() {
    const user=useContext(userContext)
  return (
    <div>
      {user}
    </div>
  )
}

export default ComponentE
