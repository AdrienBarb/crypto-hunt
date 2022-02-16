import React from 'react'
import { useEffect } from 'react'
import NFTProjectCard from '../connects/NFTProjectCard'

const NFTProjectList = ({ getNFTProjects, state }) => {
  useEffect(() => {
    const unsubscribe = getNFTProjects()
    return unsubscribe
  }, [])

  return (
    <div>
      {state.nftProjectsReducers.nftProjects.map((nftProject) => {
        return <NFTProjectCard data={nftProject} />
      })}
    </div>
  )
}

export default NFTProjectList
