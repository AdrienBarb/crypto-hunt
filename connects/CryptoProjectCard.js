import { connect } from 'react-redux'
import CryptoProjectCard from '../components/CryptoProjectCard'
import {
  voteUpForCryptoProject,
  voteDownForCryptoProject,
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
})

const CryptoProjectCardContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(CryptoProjectCard)

export default CryptoProjectCardContainer
