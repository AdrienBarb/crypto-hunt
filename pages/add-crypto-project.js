import React from 'react'
import Layout from '../connects/Layout'

import { useRouter } from 'next/router'
import {
  CenterContainer,
  ScreenContainer,
} from '../styles/StyledScreenContainer'
import CryptoProjectForm from '../connects/CryptoProjectForm'

const AddCryptoProjectFormScreen = () => {
  return (
    <Layout>
      <ScreenContainer>
        <CenterContainer>
          <CryptoProjectForm />
        </CenterContainer>
      </ScreenContainer>
    </Layout>
  )
}

export default AddCryptoProjectFormScreen
