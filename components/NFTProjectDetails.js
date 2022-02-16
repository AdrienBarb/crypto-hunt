import React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { CardButton } from '../styles/StyledButton'
import { StyledText } from '../styles/StyledText'
import { StyledCryptoProjectDetails } from '../styles/StyledCryptoProjectDetails'
import { HorizontalDivider } from '../styles/StyledDivider'
import Colors from '../constants/Colors'
import { useRouter } from 'next/router'
import { StyledNFTProjectDetails } from '../styles/StyledNFTProjectDetails'

const NFTProjectDetails = ({ projectId, getCurrentNFTProject, state }) => {
  const router = useRouter()
  useEffect(() => {
    const unsubscribe = getCurrentNFTProject(projectId)
    return unsubscribe
  }, [])
  return (
    <StyledNFTProjectDetails>
      <div className="header">
        {state.nftProjectsReducers.currentNFTProject && (
          <StyledText h1 bold karla>
            {state.nftProjectsReducers.currentNFTProject.name}
          </StyledText>
        )}
        <Link
          href={
            state.usersReducers.currentUser
              ? '/edit-nft-project'
              : { pathname: '/sign-in', query: { path: router.pathname } }
          }
        >
          <CardButton>
            <StyledText link h4 regular>
              EDIT PROJECTS
            </StyledText>
          </CardButton>
        </Link>
      </div>
      <HorizontalDivider color={Colors.yellow} width="100%" />
    </StyledNFTProjectDetails>
  )
}

export default NFTProjectDetails
