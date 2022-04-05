import { connect } from 'react-redux'
import NFTProjectCard from '../components/NFTProjectCard'
import {
  voteUpForCryptoProject,
  voteDownForCryptoProject,
} from '../store/actions/nftProjectsActions'

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

const NFTProjectCardContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(NFTProjectCard)

export default NFTProjectCardContainer
