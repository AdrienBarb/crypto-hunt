import React from 'react'

import { useRouter } from 'next/router'
import { StyledCryptoCard } from '../styles/StyledCryptoCard'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { CgWebsite } from 'react-icons/cg'
import { HiDocument } from 'react-icons/hi'
import { StyledText } from '../styles/StyledText'
import Colors from '../constants/Colors'
import Link from 'next/link'
import { HorizontalMargin, VerticalMargin } from '../styles/StyledMargin'
import { HorizontalDivider } from '../styles/StyledDivider'
import useMediaQuery from '@mui/material/useMediaQuery'

const CryptoProjectCard = ({
  state,
  data,
  voteUpForCryptoProject,
  voteDownForCryptoProject,
}) => {
  const router = useRouter()
  const matches = useMediaQuery('(max-width:768px)')

  const navToCryptoProject = (id) => {
    router.push(`crypto/${id}`)
  }

  const voteUp = (id) => {
    if (state.usersReducers.currentUser) {
      voteUpForCryptoProject(id)
    } else {
      router.push({
        pathname: '/sign-in',
        query: { path: router.pathname },
      })
    }
  }

  const voteDown = (id) => {
    voteDownForCryptoProject(id)
  }
  return (
    <StyledCryptoCard>
      <div className="top-card">
        <div className="project-details-wrapper">
          <StyledText
            h3
            bold
            karla
            onClick={() => navToCryptoProject(data.id)}
            link
          >
            {data.name} ({data.token})
          </StyledText>
          <StyledText karla className="description">
            {data?.description ? data.description : '-'}
          </StyledText>

          <HorizontalMargin m3 />
          <div className="links-wrapper">
            {data?.twitterLink && (
              <>
                <Link href={data.twitterLink}>
                  <a target="_blank">
                    <BsTwitter size={22} />
                  </a>
                </Link>
                <VerticalMargin m4 />
              </>
            )}
            {data?.websiteLink && (
              <>
                <Link href={data.websiteLink}>
                  <a target="_blank">
                    <CgWebsite size={22} />
                  </a>
                </Link>
                <VerticalMargin m4 />
              </>
            )}
            {data?.whitePaperLink && (
              <Link href={data.whitePaperLink}>
                <a target="_blank">
                  <HiDocument size={22} />
                </a>
              </Link>
            )}
          </div>
        </div>

        <div className="vote-buttons-wrapper">
          {state.usersReducers.currentUser &&
          data.voters.includes(state.usersReducers.currentUser.uid) ? (
            <div className="vote-button" onClick={() => voteDown(data.id)}>
              <AiFillHeart size={22} color={Colors.yellow} />
            </div>
          ) : (
            <div className="vote-button" onClick={() => voteUp(data.id)}>
              <AiOutlineHeart size={22} />
            </div>
          )}
          {data.votesCounter}
        </div>
      </div>

      {!matches && data?.addressOwnerRewards && (
        <div className="bottom-card">
          <div>
            <StyledText>
              Send tips to this adress, to thanks the people who discovered the
              project:
            </StyledText>
            <StyledText>Network: {data.networkOwnerRewards}</StyledText>
            <StyledText>Adress: {data.addressOwnerRewards}</StyledText>
          </div>
        </div>
      )}
    </StyledCryptoCard>
  )
}

export default CryptoProjectCard
