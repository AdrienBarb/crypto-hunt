import { connect } from 'react-redux'
import ProjectsList from '../components/ProjectsList'
import { getCryptoProjects } from '../store/actions/cryptoProjectsActions'

const mapStatetoProps = (state) => ({
  state,
})

const mapDispatchToProps = (dispatch) => ({
  getCryptoProjects: () => {
    dispatch(getCryptoProjects())
  },
})

const ProjectsListContainer = connect(
  mapStatetoProps,
  mapDispatchToProps
)(ProjectsList)

export default ProjectsListContainer
