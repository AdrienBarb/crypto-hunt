import React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { CardButton } from '../styles/StyledButton'
import { StyledText } from '../styles/StyledText'
import { StyledCryptoProjectDetails } from '../styles/StyledCryptoProjectDetails'
import { HorizontalDivider } from '../styles/StyledDivider'
import Colors from '../constants/Colors'

const CryptoProjectDetails = ({
  projectId,
  getCurrentCryptoProject,
  state,
}) => {
  useEffect(() => {
    const unsubscribe = getCurrentCryptoProject(projectId)
    return unsubscribe
  }, [])
  return (
    <StyledCryptoProjectDetails>
      <div className="header">

      {state.cryptoProjectsReducers.currentCryptoProject && (
        <StyledText h1 bold karla>
          {state.cryptoProjectsReducers.currentCryptoProject.name}
        </StyledText>
      )}

      <Link href="/edit-crypto-project">
        <CardButton>
          <StyledText link h4 regular>
            EDIT PROJECTS
          </StyledText>
        </CardButton>
      </Link>

      </div>
      <HorizontalDivider color={Colors.yellow} width="100%" />
    </StyledCryptoProjectDetails>
  )
}

export default CryptoProjectDetails
