import { connect } from 'react-redux'
import CryptoProjectDetails from '../components/CryptoProjectDetails'
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
})

const CryptoProjectDetailsContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(CryptoProjectDetails)

export default CryptoProjectDetailsContainer
