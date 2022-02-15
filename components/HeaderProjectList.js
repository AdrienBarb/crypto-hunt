import React from 'react'
import Link from 'next/link'
import { CardButton, LinkButton } from '../styles/StyledButton'
import { useRouter } from 'next/router'
import { StyledHeaderProjectList } from '../styles/StyledHeaderProjectList'
import { StyledText } from '../styles/StyledText'
import { HorizontalDivider } from '../styles/StyledDivider'
import Colors from '../constants/Colors'
import useMediaQuery from '@mui/material/useMediaQuery'
import { GrAdd } from 'react-icons/gr'

const HeaderProjectList = ({ state, title, addUrl }) => {
  const router = useRouter()
  const matches = useMediaQuery('(max-width:768px)')

  return (
    <StyledHeaderProjectList>
      <div className="header-top">
        <StyledText h1 bold karla>
          {title}
        </StyledText>
        <Link
          href={
            state.usersReducers.currentUser
              ? `${addUrl}`
              : { pathname: '/sign-in', query: { path: router.pathname } }
          }
        >
          <CardButton>
            {matches ? (
              <GrAdd size={22} />
            ) : (
              <StyledText link h4 regular>
                ADD PROJECTS
              </StyledText>
            )}
          </CardButton>
        </Link>
      </div>
      <HorizontalDivider color={Colors.yellow} width="100%" />
    </StyledHeaderProjectList>
  )
}

export default HeaderProjectList
