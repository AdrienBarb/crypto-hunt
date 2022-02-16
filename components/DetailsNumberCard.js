import React from 'react'
import { StyledText } from '../styles/StyledText'

const DetailsNumberCard = ({ title, value }) => {
  return (
    <div>
      <StyledText>{title}</StyledText>
      <StyledText karla bold h3>
        {value}
      </StyledText>
    </div>
  )
}

export default DetailsNumberCard
