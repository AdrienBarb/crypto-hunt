import React from 'react'
import { useEffect } from 'react'

const CryptoProjectDetails = ({
  projectId,
  getCurrentCryptoProject,
  state,
}) => {
  useEffect(() => {
    const unsubscribe = getCurrentCryptoProject(projectId)
    return unsubscribe
  }, [])
  return (
    <div>
      {state.cryptoProjectsReducers.currentCryptoProject && (
        <div> {state.cryptoProjectsReducers.currentCryptoProject.name} </div>
      )}
    </div>
  )
}

export default CryptoProjectDetails
