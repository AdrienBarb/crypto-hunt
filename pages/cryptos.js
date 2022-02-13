import React from 'react'
import HeaderProjectList from '../connects/HeaderProjectList'
import Layout from '../connects/Layout'
import { ScreenContainer } from '../styles/StyledScreenContainer'
import ProjectsList from '../connects/ProjectsList'

const crypto = () => {
  return (
    <Layout>
      <ScreenContainer>
        <HeaderProjectList />
        <ProjectsList />
      </ScreenContainer>
    </Layout>
  )
}

export default crypto
