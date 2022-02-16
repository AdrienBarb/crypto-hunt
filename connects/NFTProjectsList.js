import { connect } from 'react-redux'
import NFTProjectsList from '../components/NFTProjectsList'
import { getNFTProjects } from '../store/actions/nftProjectsActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  getNFTProjects: () => {
    dispatch(getNFTProjects())
  },
})

const NFTProjectsListContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(NFTProjectsList)

export default NFTProjectsListContainer
