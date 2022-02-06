import { connect } from 'react-redux'
import CryptoProjectCard from '../components/CryptoProjectCard'
import {
  voteUpForCryptoProject,
  voteDownForCryptoProject,
  checkIfVoted,
} from '../store/actions/cryptoProjectsActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  voteUpForCryptoProject: (id) => {
    dispatch(voteUpForCryptoProject(id))
  },
  voteDownForCryptoProject: (id) => {
    dispatch(voteDownForCryptoProject(id))
  },
  checkIfVoted: (id) => {
    dispatch(checkIfVoted(id))
  },
})

const CryptoProjectCardContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(CryptoProjectCard)

export default CryptoProjectCardContainer
