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
import useMediaQuery from '@mui/material/useMediaQuery'
import { FiEdit2 } from 'react-icons/fi'
import { BsTwitter } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { HiDocument } from 'react-icons/hi'
import { HorizontalMargin } from '../styles/StyledMargin'

const NFTProjectDetails = ({ projectId, getCurrentNFTProject, state }) => {
  const router = useRouter()
  const matches = useMediaQuery('(max-width:768px)')
  useEffect(() => {
    getCurrentNFTProject(projectId)
  }, [router])

  return (
    <StyledNFTProjectDetails>
      <div className="header">
        {state.nftProjectsReducers.currentNFTProject && (
          <StyledText h2 bold karla>
            {state.nftProjectsReducers.currentNFTProject.name}
          </StyledText>
        )}
        <Link
          href={
            state.usersReducers.currentUser
              ? `/edit-nft-project/${projectId}`
              : { pathname: '/sign-in', query: { path: router.pathname } }
          }
        >
          {matches ? (
            <FiEdit2 size={16} color={Colors.yellow} />
          ) : (
            <StyledText link h4 bold color={Colors.yellow}>
              EDIT PROJECTS
            </StyledText>
          )}
        </Link>
      </div>
      <HorizontalDivider color={Colors.yellow} width="100%" />
      <StyledText karla>
        {state.cryptoProjectsReducers.currentNFTProject?.description
          ? state.cryptoProjectsReducers.currentNFTProject.description
          : '-'}
      </StyledText>

      <HorizontalMargin m1 />

      <div className="links-wrapper">
        {state.cryptoProjectsReducers.currentNFTProject?.twitterLink && (
          <>
            <Link
              href={state.cryptoProjectsReducers.currentNFTProject.twitterLink}
            >
              <a target="_blank">
                <BsTwitter size={22} />
              </a>
            </Link>
            <VerticalMargin m4 />
          </>
        )}
        {state.cryptoProjectsReducers.currentNFTProject?.websiteLink && (
          <>
            <Link
              href={state.cryptoProjectsReducers.currentNFTProject.websiteLink}
            >
              <a target="_blank">
                <CgWebsite size={22} />
              </a>
            </Link>
            <VerticalMargin m4 />
          </>
        )}
        {state.cryptoProjectsReducers.currentNFTProject?.whitePaperLink && (
          <Link
            href={state.cryptoProjectsReducers.currentNFTProject.whitePaperLink}
          >
            <a target="_blank">
              <HiDocument size={22} />
            </a>
          </Link>
        )}
      </div>
      <HorizontalMargin m1 />

      {state.cryptoProjectsReducers.currentNFTProject?.networkOwnerRewards &&
        state.cryptoProjectsReducers.currentNFTProject?.addressOwnerRewards && (
          <div className="bottom-card">
            <div>
              <StyledText>
                Send tips to this adress, to thanks the people who discovered
                the project:
              </StyledText>
              <StyledText>
                Network:{' '}
                {
                  state.cryptoProjectsReducers.currentNFTProject
                    .networkOwnerRewards
                }
              </StyledText>
              <StyledText>
                Adress:{' '}
                {
                  state.cryptoProjectsReducers.currentNFTProject
                    .addressOwnerRewards
                }
              </StyledText>
            </div>
          </div>
        )}
    </StyledNFTProjectDetails>
  )
}

export default NFTProjectDetails
