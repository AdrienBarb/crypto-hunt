import React from 'react'

import { useRouter } from 'next/router'
import { StyledCryptoCard } from '../styles/StyledCryptoCard'
import { useEffect } from 'react'
import { useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

const CryptoProjectCard = ({
  state,
  data,
  voteUpForCryptoProject,
  voteDownForCryptoProject,
  checkIfVoted,
}) => {
  const router = useRouter()

  const navToCryptoProject = (id) => {
    router.push(`crypto/${id}`)
  }

  console.log(data.voters.includes(state.usersReducers.currentUser.uid))

  return (
    <StyledCryptoCard>
      <div className="vote-buttons-wrapper">
        {data.voters.includes(state.usersReducers.currentUser.uid) ? (

<div onClick={() => voteDownForCryptoProject(data.id)}>
<AiFillHeart size={22} color="red" />
</div>
        ) : (


          <div onClick={() => voteUpForCryptoProject(data.id)}>
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
