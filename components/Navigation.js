import React, { useState } from 'react'
import Link from 'next/link'
import { NavigationWrapper } from '../styles/StyledNavigation'
import { LinkButton } from '../styles/StyledButton'
import { Cross as Hamburger } from 'hamburger-react'
import useMediaQuery from '@mui/material/useMediaQuery'
import FullScreenNavigation from '../connects/FullScreenNavigation'
import { VerticalMargin } from '../styles/StyledMargin'

const Navigation = ({ state, logout }) => {
  const matches = useMediaQuery('(max-width:768px)')
  const signOutHandler = async () => {
    await logout()
  }
  const [isOpen, setOpen] = useState(false)

  return (
    <NavigationWrapper>
      {matches ? (
        <>
          <div className="hamburger-menu">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={20}
              color="white"
            />
          </div>
          {isOpen && <FullScreenNavigation />}
        </>
      ) : (
        <div className="navigation-container">
          <div className="navigations-links">
            <Link href="/">
              <LinkButton>Home</LinkButton>
            </Link>
            <VerticalMargin m2 />
            <Link href="/cryptos">
              <LinkButton>Crypto</LinkButton>
            </Link>
            <VerticalMargin m2 />
            <Link href="/nfts">
              <LinkButton>NFT's</LinkButton>
            </Link>
          </div>

          <div className="connection-link">
            {state.usersReducers.currentUser ? (
              <LinkButton onClick={signOutHandler}>Log out</LinkButton>
            ) : (
              <>
                <Link href="/sign-in">
                  <LinkButton>Sign in</LinkButton>
                </Link>
                <VerticalMargin m2 />
                <Link href="/sign-up">
                  <LinkButton>Sign up</LinkButton>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </NavigationWrapper>
  )
}

export default Navigation
