import React from "react";
import EventsListContainer from "../connects/EventsList";
import HeaderProjectList from "../connects/HeaderProjectList";
import Layout from "../connects/Layout";
import { ScreenContainer } from "../styles/StyledScreenContainer";

const events = () => {
  return (
    <Layout>
      <ScreenContainer>
        <HeaderProjectList title="Events" />
        <EventsListContainer />
      </ScreenContainer>
    </Layout>
  );
};

export default events;
