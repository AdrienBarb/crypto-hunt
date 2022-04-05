import { connect } from 'react-redux'
import EventForm from '../components/EventForm'
import {
  createCryptoEvent,
  cleanReducers,
} from '../store/actions/cryptoEventsActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  createCryptoEvent: (cryptoEventValues, project) => {
    dispatch(createCryptoEvent(cryptoEventValues, project))
  },
  cleanReducers: () => {
    dispatch(cleanReducers())
  },
})

const EventFormContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(EventForm)

export default EventFormContainer
