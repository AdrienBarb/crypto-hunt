import React, { useEffect, useState } from 'react'

import { auth } from '../firebase/clientApp'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'next/router'

const CurrentUser = ({ getCurrentUser }) => {
  const router = useRouter()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      getCurrentUser(user)
    })
  }, [router])

  return <div></div>
}

export default CurrentUser
