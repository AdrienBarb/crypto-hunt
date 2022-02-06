import React from 'react'
import { useEffect } from 'react'
import CryptoProjectCard from './CryptoProjectCard'

const ProjectsList = ({ getCryptoProjects, state }) => {
  useEffect(() => {
    const unsubscribe = getCryptoProjects()
    return unsubscribe
  }, [])

  return (
    <div>
      {state.cryptoProjectsReducers.cryptoProjects.map((cryptoProject) => {
        return <CryptoProjectCard data={cryptoProject} />
      })}
    </div>
  )
}

export default ProjectsList
