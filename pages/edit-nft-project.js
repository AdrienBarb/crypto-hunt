import React from 'react'

import { useRouter } from 'next/router'
import {
  CenterContainer,
  ScreenContainer,
} from '../styles/StyledScreenContainer'
import NFTProjectForm from '../connects/NFTProjectForm'
import Layout from '../connects/Layout'

const EditNFTProjectFormScreen = () => {
  const router = useRouter()

  return (
    <Layout>
      <ScreenContainer>
        <CenterContainer>
          <NFTProjectForm edit={router.pathname == '/edit-nft-project'} />
        </CenterContainer>
      </ScreenContainer>
    </Layout>
  )
}

export default EditNFTProjectFormScreen
