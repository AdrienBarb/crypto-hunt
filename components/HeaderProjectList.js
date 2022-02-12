import React from 'react'
import Link from 'next/link'
import { CardButton, LinkButton } from '../styles/StyledButton'
import { useRouter } from 'next/router'
import { StyledHeaderProjectList } from '../styles/StyledHeaderProjectList'
import { StyledText } from '../styles/StyledText'
import { HorizontalDivider } from '../styles/StyledDivider'
import Colors from '../constants/Colors'

const HeaderProjectList = ({ state }) => {
  const router = useRouter()
  return (
    <StyledHeaderProjectList>
      <div className="header-top">
        <StyledText h1 bold karla>
          Cryptocurrencies
        </StyledText>
        <Link
          href={
            state.usersReducers.currentUser
              ? '/add-crypto-project'
              : { pathname: '/sign-in', query: { path: router.pathname } }
          }
        >
          <CardButton>
            <StyledText h4 regular>
              ADD PROJECTS
            </StyledText>
          </CardButton>
        </Link>
      </div>
      <HorizontalDivider color={Colors.yellow} width="100%" />
    </StyledHeaderProjectList>
  )
}

export default HeaderProjectList
