import { connect } from 'react-redux'
import CryptoProjectDetails from '../components/CryptoProjectDetails'
import { getCurrentCryptoProject } from '../store/actions/cryptoProjectsActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  getCurrentCryptoProject: (id) => {
    dispatch(getCurrentCryptoProject(id))
  },
})

const CryptoProjectDetailsContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(CryptoProjectDetails)

export default CryptoProjectDetailsContainer
