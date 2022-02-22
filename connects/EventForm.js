import { connect } from 'react-redux'
import EventForm from '../components/EventForm'
import { addCryptoProject } from '../store/actions/cryptoProjectsActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  addCryptoProject: (cryptoProjectValues) => {
    dispatch(addCryptoProject(cryptoProjectValues))
  },
})

const EventFormContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(EventForm)

export default EventFormContainer
