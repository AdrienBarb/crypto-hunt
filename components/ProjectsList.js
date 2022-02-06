import React from 'react'
import { useEffect } from 'react'
import CryptoProjectCard from '../connects/CryptoProjectCard'

const ProjectsList = ({ getCryptoProjects, state }) => {
  useEffect(() => {
    const unsubscribe = getCryptoProjects()
    return unsubscribe
  }, [])

  console.log(state)

  return (
    <div>
      {state.cryptoProjectsReducers.cryptoProjects.map((cryptoProject) => {
        return <CryptoProjectCard data={cryptoProject} />
      })}
    </div>
  )
}

export default ProjectsList
