import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../connects/Layout'
import { ScreenContainer } from '../../styles/StyledScreenContainer'
import CryptoProjectDetails from '../../connects/CryptoProjectDetails'

const CurrentCryptoProjectScreen = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <ScreenContainer>
        <CryptoProjectDetails projectId={id} />
      </ScreenContainer>
    </Layout>
  )
}

export default CurrentCryptoProjectScreen
