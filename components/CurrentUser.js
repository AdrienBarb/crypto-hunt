import React, { useEffect, useState } from 'react'

import { auth } from '../firebase/clientApp'
import { onAuthStateChanged } from 'firebase/auth'

const CurrentUser = ({ getCurrentUser }) => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      getCurrentUser(user)
    })
  }, [])

  return <div></div>
}

export default CurrentUser
