import React from 'react'
import { StyledEventCard } from '../styles/StyledEventCard'
import { StyledText } from '../styles/StyledText'
import moment from 'moment'

const EventCard = ({ eventType, otherEventType, eventDate }) => {
  return (
    <StyledEventCard>
      <StyledText karla h3>
        {eventType == 'other' ? otherEventType : eventType}
      </StyledText>
      <StyledText karla>
        {moment.unix(eventDate).format('MM/DD/YY hh:mm')}
      </StyledText>
    </StyledEventCard>
  )
}

export default EventCard
