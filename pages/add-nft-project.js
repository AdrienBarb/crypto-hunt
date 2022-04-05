import React from 'react'
import Layout from '../connects/Layout'
import {
  CenterContainer,
  ScreenContainer,
} from '../styles/StyledScreenContainer'
import NFTProjectForm from '../connects/NFTProjectForm'

const AddCryptoNFTFormScreen = () => {
  return (
    <Layout>
      <ScreenContainer>
        <CenterContainer>
          <NFTProjectForm />
        </CenterContainer>
      </ScreenContainer>
    </Layout>
  )
}

export default AddCryptoNFTFormScreen
