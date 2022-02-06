import React from 'react'
import { useEffect } from 'react'
import CryptoProjectCard from './CryptoProjectCard'

const ProjectsList = ({ getCryptoProjects, state }) => {
  useEffect(() => {
    const unsubscribe = getCryptoProjects()
    return unsubscribe
  }, [])

  console.log('STATE ', state)
  console.log('STATE 2', state.cryptoProjectsReducers)

  return (
    <div>
      {state.cryptoProjectsReducers.cryptoProjects.map((cryptoProject) => {
        console.log('JE PASSE DANS LA BOUCLE', cryptoProject)
        return <CryptoProjectCard data={cryptoProject} />
      })}
    </div>
  )
}

export default ProjectsList
