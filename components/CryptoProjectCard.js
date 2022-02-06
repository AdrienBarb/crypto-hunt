import React from 'react'

import { useRouter } from 'next/router'

const CryptoProjectCard = ({ data }) => {
  const router = useRouter()

  const navToCryptoProject = (id) => {
    router.push(`crypto/${id}`)
  }

  return <div onClick={() => navToCryptoProject(data.id)}>{data.name}</div>
}

export default CryptoProjectCard
