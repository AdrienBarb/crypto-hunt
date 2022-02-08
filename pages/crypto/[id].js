import React from 'react'
import { useRouter } from 'next/router'
import Layout from '../../connects/Layout'
import { ScreenContainer } from '../../styles/StyledScreenContainer'
import CryptoProjectDetails from '../../connects/CryptoProjectDetails'
import Link from 'next/link'
import { LinkButton } from '../../styles/StyledButton'

const CurrentCryptoProjectScreen = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <Layout>
      <ScreenContainer>
        <Link href="/edit-crypto-project">
          <LinkButton>Modifier</LinkButton>
        </Link>
        <CryptoProjectDetails projectId={id} />
      </ScreenContainer>
    </Layout>
  )
}

export default CurrentCryptoProjectScreen
