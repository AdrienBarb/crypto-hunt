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
          <Link href="/crypto">
            <div className="navigation-link">Crypto</div>
          </Link>
        </div>

        <div className="connection-link">
          {state.usersReducer.currentUser ? (
            <div className="connect-button" onClick={signOutHandler}>
              Se déconnecter
            </div>
          ) : (
            <>
              <Link href="/sign-in">
                <div className="connect-button">Se connecter</div>
              </Link>
              <Link href="/sign-up">
                <div className="connect-button">S'enregistrer</div>
              </Link>
            </>
          )}
        </div>
      </div>
    </NavigationWrapper>
  )
}

export default Navigation
