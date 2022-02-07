import React from 'react'
import EmailPasswordAuthLogin from '../components/EmailPasswordAuthSignIn'
import Layout from '../connects/Layout'
import { ConnectScreen } from '../styles/StyledConnectScreen'

const signIn = () => {
  return (
    <Layout>
      <ConnectScreen>
        <EmailPasswordAuthLogin />
      </ConnectScreen>
    </Layout>
  )
}

export default signIn
