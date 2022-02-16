import { connect } from 'react-redux'
import NFTProjectDetails from '../components/NFTProjectDetails'
import { getCurrentNFTProject } from '../store/actions/nftProjectsActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  getCurrentNFTProject: (id) => {
    dispatch(getCurrentNFTProject(id))
  },
})

const NFTProjectDetailsContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(NFTProjectDetails)

export default NFTProjectDetailsContainer
