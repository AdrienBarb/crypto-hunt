import React, { useEffect } from "react";
import { StyledText } from "../styles/StyledText";

const EventsList = ({ state, getEvents }) => {
  useEffect(() => {
    getEvents();
  }, []);
  return (
    <div>
      {state.cryptoEventsReducers.events.map((event) => {
        return <StyledText>{event.eventType}</StyledText>;
      })}
    </div>
  );
};

export default EventsList;
