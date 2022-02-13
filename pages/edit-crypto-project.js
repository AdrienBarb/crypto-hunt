import React from 'react'
import Layout from '../connects/Layout'

import { useRouter } from 'next/router'
import {
  CenterContainer,
  ScreenContainer,
} from '../styles/StyledScreenContainer'
import CryptoProjectForm from '../connects/CryptoProjectForm'

const EditCryptoProjectFormScreen = () => {
  const router = useRouter()

  return (
    <Layout>
      <ScreenContainer>
        <CenterContainer>
          <CryptoProjectForm edit={router.pathname == '/edit-crypto-project'} />
        </CenterContainer>
      </ScreenContainer>
    </Layout>
  )
}

export default EditCryptoProjectFormScreen
