import React from 'react'

import { auth } from '../firebase/clientApp'
import { signOut } from 'firebase/auth'

const Header = () => {
  const signOutHandler = async () => {
    await signOut(auth)
  }

  return <button onClick={signOutHandler}>Sign out</button>
}

export default Header
