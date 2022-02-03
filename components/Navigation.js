import React from 'react'
import Link from 'next/link'
import { NavigationWrapper } from '../styles/StyledNavigation'
import { auth } from '../firebase/clientApp'
import { signOut } from 'firebase/auth'

const Navigation = ({ state }) => {
  const signOutHandler = async () => {
    await signOut(auth)
  }

  return (
    <NavigationWrapper>
      <div className="navigation-container">
        <div className="navigations-links">
          <Link href="/">
            <div className="navigation-link">Home</div>
          </Link>
        </div>

        <div className="connection-link">
          {state.usersReducer.currentUser ? (
            <div className="connect-button" onClick={signOutHandler}>
              Sign-out
            </div>
          ) : (
            <>
              <Link href="/sign-in">
                <div className="connect-button">Sign-in</div>
              </Link>
              <Link href="/sign-up">
                <div className="connect-button">Sign-up</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </NavigationWrapper>
  )
}

export default Navigation
