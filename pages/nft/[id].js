import React from 'react'
import Layout from '../../connects/Layout'
import { ScreenContainer } from '../../styles/StyledScreenContainer'
import { useRouter } from 'next/router'
import NFTProjectDetails from '../../connects/NFTProjectDetails'

const CurrentNFTProjectScreen = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <ScreenContainer>
        <NFTProjectDetails projectId={id} />
      </ScreenContainer>
    </Layout>
  )
}

export default CurrentNFTProjectScreen
