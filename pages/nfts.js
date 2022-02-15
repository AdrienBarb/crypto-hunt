import React from 'react'
import Layout from '../connects/Layout'
import { ScreenContainer } from '../styles/StyledScreenContainer'
import HeaderProjectList from '../connects/HeaderProjectList'

const nftsScreen = () => {
  return (
    <Layout>
      <ScreenContainer>
        <HeaderProjectList title="NFT's" addUrl="/add-nft-project" />
      </ScreenContainer>
    </Layout>
  )
}

export default nftsScreen
