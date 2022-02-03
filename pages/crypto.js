import React from 'react'
import HeaderProjectList from '../connects/HeaderProjectList'
import Layout from '../components/Layout'
import { ScreenContainer } from '../styles/StyledScreenContainer'
import { collection, onSnapshot } from '@firebase/firestore'

import { db } from '../firebase/clientApp'
import { useEffect } from 'react'

const crypto = () => {
  console.log(db)
  useEffect(() => {
    const collectionRef = collection(db, 'cryptoProject')

    onSnapshot(collectionRef, (querySnapshot) => {
      querySnapshot.docs.map((doc) => console.log(doc.data(), doc.id))
    })
  }, [])

  return (
    <Layout>
      <ScreenContainer>
        <HeaderProjectList />
      </ScreenContainer>
    </Layout>
  )
}

export default crypto
