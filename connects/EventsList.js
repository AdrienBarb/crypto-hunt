import { connect } from "react-redux";
import EventsList from "../components/EventsList";
import { getEvents } from "../store/actions/cryptoEventsActions";

const mapStatetoProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({
  getEvents: () => {
    dispatch(getEvents());
  },
});

const EventsListContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(EventsList);

export default EventsListContainer;
