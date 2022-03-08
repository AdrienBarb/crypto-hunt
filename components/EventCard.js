import React from 'react'
import { StyledEventCard } from '../styles/StyledEventCard'
import { StyledText } from '../styles/StyledText'
import moment from 'moment'

const EventCard = ({ eventType, eventDate }) => {
  return (
    <StyledEventCard>
      <StyledText>{eventType}</StyledText>
      <StyledText>{moment.unix(eventDate).format('LLLL')}</StyledText>
    </StyledEventCard>
  )
}

export default EventCard
