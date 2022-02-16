import React from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { CardButton } from '../styles/StyledButton'
import { StyledText } from '../styles/StyledText'
import { StyledCryptoProjectDetails } from '../styles/StyledCryptoProjectDetails'
import { HorizontalDivider } from '../styles/StyledDivider'
import Colors from '../constants/Colors'
import { useRouter } from 'next/router'
import { FiEdit2 } from 'react-icons/fi'
import useMediaQuery from '@mui/material/useMediaQuery'
import { BsTwitter } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { HiDocument } from 'react-icons/hi'
import { HorizontalMargin, VerticalMargin } from '../styles/StyledMargin'
import axios from 'axios'
import DetailsNumberCard from './DetailsNumberCard'

const CryptoProjectDetails = ({
  projectId,
  getCurrentCryptoProject,
  state,
  getProjectNumbers,
}) => {
  const router = useRouter()
  const matches = useMediaQuery('(max-width:768px)')
  useEffect(() => {
    const unsubscribe = getCurrentCryptoProject(projectId)
    return unsubscribe
  }, [])

  useEffect(() => {
    getProjectNumbers(state.cryptoProjectsReducers?.currentCryptoProject?.token)
  }, [state.cryptoProjectsReducers?.currentCryptoProject])
  return (
    <StyledCryptoProjectDetails>
      <div className="header">
        {state.cryptoProjectsReducers.currentCryptoProject && (
          <StyledText h1 bold karla>
            {state.cryptoProjectsReducers.currentCryptoProject.name} (
            {state.cryptoProjectsReducers.currentCryptoProject.token})
          </StyledText>
        )}

        <Link
          href={
            state.usersReducers.currentUser
              ? '/edit-crypto-project'
              : { pathname: '/sign-in', query: { path: router.pathname } }
          }
        >
          <CardButton>
            {matches ? (
              <FiEdit2 size={22} />
            ) : (
              <StyledText link h4 regular>
                EDIT PROJECTS
              </StyledText>
            )}
          </CardButton>
        </Link>
      </div>
      <HorizontalDivider color={Colors.yellow} width="100%" />

      {state.cryptoProjectsReducers.currentCryptoProjectNumbers && (
        <>
          <div className="numbers-wrapper">
            <div className="numbers-row">
              <DetailsNumberCard
                title="Price"
                value={
                  state.cryptoProjectsReducers.currentCryptoProjectNumbers.PRICE
                    ? state.cryptoProjectsReducers.currentCryptoProjectNumbers
                        .PRICE
                    : '-'
                }
              />
              {matches ? <HorizontalMargin m4 /> : <VerticalMargin m1 />}
              <DetailsNumberCard
                title="Market Cap"
                value={
                  state.cryptoProjectsReducers.currentCryptoProjectNumbers
                    .MKTCAP
                    ? state.cryptoProjectsReducers.currentCryptoProjectNumbers
                        .MKTCAP
                    : '-'
                }
              />
              {matches ? <HorizontalMargin m4 /> : <VerticalMargin m1 />}
              <DetailsNumberCard
                title="Supply"
                value={
                  state.cryptoProjectsReducers.currentCryptoProjectNumbers
                    .SUPPLY
                    ? state.cryptoProjectsReducers.currentCryptoProjectNumbers
                        .SUPPLY
                    : '-'
                }
              />
            </div>

            <HorizontalMargin m2 />

            <div className="numbers-row">
              <DetailsNumberCard
                title="24H"
                value={
                  state.cryptoProjectsReducers.currentCryptoProjectNumbers
                    .SUPPLY
                    ? `${state.cryptoProjectsReducers.currentCryptoProjectNumbers.CHANGEPCT24HOUR}%`
                    : '-'
                }
              />
              {matches ? <HorizontalMargin m4 /> : <VerticalMargin m1 />}
              <DetailsNumberCard
                title="1D"
                value={
                  state.cryptoProjectsReducers.currentCryptoProjectNumbers
                    .SUPPLY
                    ? `${state.cryptoProjectsReducers.currentCryptoProjectNumbers.CHANGEPCTDAY}%`
                    : '-'
                }
              />
            </div>
          </div>
          <HorizontalDivider color={Colors.yellow} width="100%" />
        </>
      )}

      <StyledText karla>
        {state.cryptoProjectsReducers.currentCryptoProject?.description
          ? state.cryptoProjectsReducers.currentCryptoProject.description
          : '-'}
      </StyledText>

      <HorizontalMargin m1 />

      <div className="links-wrapper">
        {state.cryptoProjectsReducers.currentCryptoProject?.twitterLink && (
          <>
            <Link
              href={
                state.cryptoProjectsReducers.currentCryptoProject.twitterLink
              }
            >
              <a target="_blank">
                <BsTwitter size={22} />
              </a>
            </Link>
            <VerticalMargin m4 />
          </>
        )}
        {state.cryptoProjectsReducers.currentCryptoProject?.websiteLink && (
          <>
            <Link
              href={
                state.cryptoProjectsReducers.currentCryptoProject.websiteLink
              }
            >
              <a target="_blank">
                <CgWebsite size={22} />
              </a>
            </Link>
            <VerticalMargin m4 />
          </>
        )}
        {state.cryptoProjectsReducers.currentCryptoProject?.whitePaperLink && (
          <Link
            href={
              state.cryptoProjectsReducers.currentCryptoProject.whitePaperLink
            }
          >
            <a target="_blank">
              <HiDocument size={22} />
            </a>
          </Link>
        )}
      </div>
      <HorizontalMargin m1 />

      {state.cryptoProjectsReducers.currentCryptoProject?.networkOwnerRewards &&
        state.cryptoProjectsReducers.currentCryptoProject
          ?.addressOwnerRewards && (
          <div className="bottom-card">
            <div>
              <StyledText>
                Send tips to this adress, to thanks the people who discovered
                the project:
              </StyledText>
              <StyledText>
                Network:{' '}
                {
                  state.cryptoProjectsReducers.currentCryptoProject
                    .networkOwnerRewards
                }
              </StyledText>
              <StyledText>
                Adress:{' '}
                {
                  state.cryptoProjectsReducers.currentCryptoProject
                    .addressOwnerRewards
                }
              </StyledText>
            </div>
          </div>
        )}
    </StyledCryptoProjectDetails>
  )
}

export default CryptoProjectDetails
