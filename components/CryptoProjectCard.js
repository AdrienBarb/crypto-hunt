import React from 'react'

import { useRouter } from 'next/router'
import { StyledCryptoCard } from '../styles/StyledCryptoCard'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

const CryptoProjectCard = ({
  state,
  data,
  voteUpForCryptoProject,
  voteDownForCryptoProject,
}) => {
  const router = useRouter()

  const navToCryptoProject = (id) => {
    router.push(`crypto/${id}`)
  }

  const voteUp = (id) => {

    if(state.usersReducers.currentUser) {
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
      <div className="vote-buttons-wrapper">
        {data.voters.includes(state.usersReducers.currentUser.uid) ? (
          <div onClick={() => voteDown(data.id)}>
          <AiFillHeart size={22} color="red" />
          </div>
        ) : (
          <div onClick={() => voteUp(data.id)}>
            <AiOutlineHeart size={22} />
          </div>
        )}
        {data.votesCounter}
      </div>

      <div
        className="project-details-wrapper"
        onClick={() => navToCryptoProject(data.id)}
      >
        <h1>
          {data.name} ({data.token})
        </h1>
        <p>{data.description}</p>
      </div>
    </StyledCryptoCard>
  )
}

export default CryptoProjectCard
