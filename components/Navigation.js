import React from 'react'
import Link from 'next/link'
import { NavigationWrapper } from '../styles/StyledNavigation'
import { LinkButton } from '../styles/StyledButton'

const Navigation = ({ state, logout }) => {
  const signOutHandler = async () => {
    await logout()
  }

  return (
    <NavigationWrapper>
      <div className="navigation-container">
        <div className="navigations-links">
          <Link href="/">
            <LinkButton>Home</LinkButton>
          </Link>
          <Link href="/cryptos">
            <LinkButton>Crypto</LinkButton>
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
              <Link href="/sign-up">
                <LinkButton>Sign up</LinkButton>
              </Link>
            </>
          )}
        </div>
      </div>
    </NavigationWrapper>
  )
}

export default Navigation
