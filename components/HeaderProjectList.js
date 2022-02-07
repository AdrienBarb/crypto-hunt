import React from 'react'
import Link from 'next/link'
import { LinkButton } from '../styles/StyledButton'
import { useRouter } from 'next/router'

const HeaderProjectList = ({ state }) => {
  const router = useRouter()
  console.log(router)
  return (
    <Link
      href={
        state.usersReducers.currentUser
          ? '/add-crypto-project'
          : { pathname: '/sign-in', query: { path: router.pathname } }
      }
    >
      <LinkButton>Ajouter un projet</LinkButton>
    </Link>
  )
}

export default HeaderProjectList
