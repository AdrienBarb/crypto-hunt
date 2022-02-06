import React from 'react'

import { useRouter } from 'next/router'
import { StyledCryptoCard } from '../styles/StyledCryptoCard'
import { useEffect } from 'react'
import { useState } from 'react'

const CryptoProjectCard = ({
  data,
  voteUpForCryptoProject,
  voteDownForCryptoProject,
  checkIfVoted,
}) => {
  const router = useRouter()
  const [canVote, setCanVote] = useState(false)

  useEffect(() => {
    console.log('HOOOOOOOO', checkIfVoted(data.id))
  }, [])

  const navToCryptoProject = (id) => {
    router.push(`crypto/${id}`)
  }

  return (
    <StyledCryptoCard>
      <div className="vote-buttons-wrapper">
        <div onClick={() => voteUpForCryptoProject(data.id)}>UP</div>
        <div onClick={() => voteDownForCryptoProject(data.id)}>DOWN</div>
      </div>

      <div
        className="project-details-wrapper"
        onClick={() => navToCryptoProject(data.id)}
      >
        {data.name}
      </div>
    </StyledCryptoCard>
  )
}

export default CryptoProjectCard
