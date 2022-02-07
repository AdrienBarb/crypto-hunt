// auth.tsx
import React from 'react'

import EmailPasswordAuthSignUp from '../components/EmailPasswordAuthSignUp'
import Layout from '../connects/Layout'
import { ConnectScreen } from '../styles/StyledConnectScreen'

function SignUp() {
  return (
    <Layout>
      <ConnectScreen>
        <EmailPasswordAuthSignUp />
      </ConnectScreen>
    </Layout>
  )
}

export default SignUp
