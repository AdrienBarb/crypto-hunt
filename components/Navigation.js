import React from 'react'
import Link from 'next/link'
import { NavigationWrapper } from '../styles/StyledNavigation'

const Navigation = ({ state, logout }) => {
  const signOutHandler = async () => {
    await logout()
  }

  return (
    <NavigationWrapper>
      <div className="navigation-container">
        <div className="navigations-links">
          <Link href="/">
            <div className="navigation-link">Home</div>
          </Link>
          <Link href="/cryptos">
            <div className="navigation-link">Crypto</div>
          </Link>
        </div>

        <div className="connection-link">
          {state.usersReducers.currentUser ? (
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
