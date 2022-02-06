import React from 'react'
import Link from 'next/link'
import { LinkButton } from '../styles/StyledButton'

const HeaderProjectList = ({ state }) => {
  return (
    <Link
      href={
        state.usersReducers.currentUser ? '/add-crypto-project' : '/sign-in'
      }
    >
      <LinkButton>Ajouter un projet</LinkButton>
    </Link>
  )
}

export default HeaderProjectList
