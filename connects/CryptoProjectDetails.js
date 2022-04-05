import { connect } from 'react-redux'
import CryptoProjectDetails from '../components/CryptoProjectDetails'
import { getCurrentCryptoProjectEvent } from '../store/actions/cryptoEventsActions'
import {
  getCurrentCryptoProject,
  getProjectNumbers,
} from '../store/actions/cryptoProjectsActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  getCurrentCryptoProject: (id) => {
    dispatch(getCurrentCryptoProject(id))
  },
  getProjectNumbers: (token) => {
    dispatch(getProjectNumbers(token))
  },
  getCurrentCryptoProjectEvent: (projectId) => {
    dispatch(getCurrentCryptoProjectEvent(projectId))
  },
})

const CryptoProjectDetailsContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(CryptoProjectDetails)

export default CryptoProjectDetailsContainer
